import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
export async function POST(req,res) {
    try{
        let reqBody=await req.json();
        const prisma=new PrismaClient();
        const result=await prisma.message.create({
            data:reqBody
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.message.findMany()
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
export async function PUT(req, res) {
    try {
        let { searchParams } = new URL(req.url);
        let id = searchParams.get('id');
         let reqBody=await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.message.update({ where: { id: id },data:reqBody })
        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "fail", data: e })
    }
}

export async function DELETE(req, res) {
    try {
        let { searchParams } = new URL(req.url);
        let id = searchParams.get('id');
        const prisma = new PrismaClient();
        const result = await prisma.message.delete({ where: { id: id } })
        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "fail", data: e })
    }
}