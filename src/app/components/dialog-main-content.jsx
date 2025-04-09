"use client"

import { Button } from "../../components/ui/button";
import { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";

async function connectMetamask(){
  if(window.ethereum !== "undefined"){
    try{
      await window.ethereum.request({method: "eth_requestAccounts"});

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const walletId = await signer.getAddress();

      return {signer, walletId};
    }
    catch(error){
      console.log("asad")
      console.log(error);
    }
  }
  else{
    console.log("Metamask not installed");
  }
}

async function getNonce(address, role) {

    try{
      const response = await axios.get(`http://localhost:3000/api/auth?address=${address}&role=${role}`);
      console.log(response.data.msg);
      return response.data.nonce;
    }
    catch(error){
      console.log(error);
    }

}

async function verifySignature(signature, address, role){
  try{
    const response = await axios.post('http://localhost:3000/api/auth/', {
      signature: signature,
      walletId: address,
      role: role
    });

    return response.data;
  }
  catch(error){
    console.log(error);
  }
}

export default function DialogMainContent(){
    const [role, setRole] = useState("Consumer");
    const [address, setAddress] = useState("");
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);

    async function connectWallet(){
      setLoading(true);
        const {signer, walletId} = await connectMetamask();
        setAddress(walletId);
        
        const nonce = await getNonce(walletId, role);
        console.log(nonce);
        if(nonce){
          const signature = await signer.signMessage(nonce);

          const response = await verifySignature(signature, walletId, role);
          console.log(response);
          if(response.isVerified){
            console.log("Verification successful");
            localStorage.setItem("token", response.token)
            router.push(`/dashboard/${role}`)
          }
          else{
            console.log("Verification failed");
          }
        }
      setLoading(false)
    }

    return (
        <div className="flex gap-10 flex-col">
            <label>Select your role:</label>
              <select onChange={(e) => setRole(e.currentTarget.value)}>
                <option value="Consumer">Consumer</option>
                <option value="GasAdmin">Gas Admin</option>
              </select>
              {
                isLoading ? 
                <Button  className="bg-black text-white hover:bg-zinc-900 cursor-pointer">
                  <div className="w-5 h-5 rounded-full border-b-2 border-blue-500 animate-spin"></div>
                  {" "}Connecting....
                </Button>
                :
                <Button onClick={connectWallet} className="bg-black text-white hover:bg-zinc-900 cursor-pointer">Connect to Wallet</Button>
              }
        </div>
        
    )
}