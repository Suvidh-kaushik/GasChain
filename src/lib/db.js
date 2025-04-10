import {PrismaClient} from "@prisma/client";

const prismaSingleClient = () =>{
    return new PrismaClient();
}

const prisma = globalThis.prisma ?? prismaSingleClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma