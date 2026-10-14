import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient();

export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.technology_list.createMany({
            data:reqBody
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}