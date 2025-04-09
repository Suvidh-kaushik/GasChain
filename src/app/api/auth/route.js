import { NextResponse } from "next/server";
import prisma from "../../../lib/db";
import {ethers} from "ethers";
import jwt from "jsonwebtoken";

function getNonce(walletId, role){
    const date = new Date().toString();
    const nonce = `Sign this message date: ${date}, ${"\n\n"} Role: ${role}, ${"\n\n"} walletId: ${walletId}`;
    return nonce;
}

export async function GET(req){
    const {searchParams} = new URL(req.url);
    const walletId =  searchParams.get("address");
    const role = searchParams.get("role");

    if(!walletId) return NextResponse.json({nonce: "", msg: "Wallet Address Required"});
    if(!role) return NextResponse.json({nonce: "", msg: "Role is required"});

    const nonce = getNonce(walletId, role);

    try{
        console.log("Nonce: " + nonce);
        let user;
        if(role == "Consumer"){
            user = await prisma.customer.upsert({
                where: {wallet: walletId},
                create: {wallet: walletId, nonce},
                update: {nonce},
            });
        }
        else if(role == "GasAdmin"){
            user = await prisma.admin.upsert({
                where: {wallet: walletId},
                create: {wallet: walletId, nonce},
                update: {nonce},
            });
        }

        return NextResponse.json({nonce: nonce, msg: "Nonce created"});
    }
    catch(error){
        console.error(error);
        return NextResponse.json({nonce : "", msg : error.message});
    }

}

function verifySignature(signature, userNonce, address){
    const userAddress = ethers.verifyMessage(userNonce, signature);
    if(userAddress.toLowerCase() == address.toLowerCase()) return true;
    return false;
}

function generateToken(address, role){
    const token = jwt.sign({address, role}, process.env.JWT_SECRET, {expiresIn: "2 days"})
    return token;
}

export async function POST(req){
    const {signature, walletId, role} = await req.json();
    console.log("Server: " + walletId);
    try{
        let user;
        if(role == "Consumer"){
            user = await prisma.customer.findUnique({
                where: {wallet: walletId},
            });
        }
        else if(role == "GasAdmin"){
            user = await prisma.admin.findUnique({
                where: {wallet: walletId},
            });
        }
        console.log(user);
        const isVerified = verifySignature(signature, user.nonce, walletId);
        if(isVerified){
            const jwtToken = generateToken(walletId, role);
            console.log(jwtToken);
            return NextResponse.json({isVerified: true, msg: "Verified", token: jwtToken});
        }
        else{
            return NextResponse.json({isVerified: false, msg: "Verification failed"});
        }
    }
    catch(error){
        console.error(error);
        return NextResponse.json({isVerified: false, msg : error.message});
    }
}