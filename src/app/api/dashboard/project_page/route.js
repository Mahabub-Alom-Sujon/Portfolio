import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient();
// export async function POST(req,res) {
//     try{
//         let reqBody=await req.json();
//         const prisma=new PrismaClient();
//         const result=await prisma.portfolio.create({
//             data:reqBody
//         })
//         return  NextResponse.json({status:"success",data:result})
//     }
//     catch (e) {
//         return  NextResponse.json({status:"fail",data:e.toString()})
//     }
// }
export async function POST(req) {
    try {
        const reqBody = await req.json();

        const result = await prisma.$transaction(async (tx) => {
            // Create Portfolio
            const portfolio = await tx.portfolio.create({
                data: {
                    title: reqBody.title,
                    category: reqBody.category,
                    img: reqBody.img,
                    github_link: reqBody.github_link,
                    live_link: reqBody.live_link,
                },
            });

            // Create Technology List
            if (
                reqBody.technology_list &&
                reqBody.technology_list.length > 0
            ) {
                await tx.technology_list.createMany({
                    data: reqBody.technology_list.map((item) => ({
                        name: item.name,
                        portfolioId: portfolio.id,
                    })),
                });
            }

            // Return portfolio with technologies
            return await tx.portfolio.findUnique({
                where: {
                    id: portfolio.id,
                },
                include: {
                    technology_list: true,
                },
            });
        });

        return NextResponse.json({
            status: "success",
            data: result,
        });
    } catch (e) {
        return NextResponse.json(
            {
                status: "fail",
                message: e.message,
            },
            { status: 500 }
        );
    }
}
export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.portfolio.findMany({
            include:{
                technology_list:true
            }
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.toString()})
    }
}
// export async function PUT(req, res) {
//     try {
//         let { searchParams } = new URL(req.url);
//         let id = searchParams.get('id');
//          let reqBody=await req.json();
//         const prisma = new PrismaClient();
//         const result = await prisma.portfolio.update({ where: { id: id },data:reqBody })
//         return NextResponse.json({ status: "success", data: result })
//     }
//     catch (e) {
//         return NextResponse.json({ status: "fail", data: e })
//     }
// }
export async function PUT(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                {
                    status: "fail",
                    message: "Portfolio ID is required",
                },
                { status: 400 }
            );
        }

        const reqBody = await req.json();

        const result = await prisma.$transaction(async (tx) => {
            // Update Portfolio
            await tx.portfolio.update({
                where: {
                    id: id,
                },
                data: {
                    title: reqBody.title,
                    category: reqBody.category,
                    img: reqBody.img,
                    github_link: reqBody.github_link,
                    live_link: reqBody.live_link,
                },
            });

            // Delete old technologies
            await tx.technology_list.deleteMany({
                where: {
                    portfolioId: id,
                },
            });

            // Create new technologies
            if (
                reqBody.technology_list &&
                reqBody.technology_list.length > 0
            ) {
                await tx.technology_list.createMany({
                    data: reqBody.technology_list.map((item) => ({
                        name: item.name,
                        portfolioId: id,
                    })),
                });
            }

            // Return updated portfolio
            return await tx.portfolio.findUnique({
                where: {
                    id: id,
                },
                include: {
                    technology_list: true,
                },
            });
        });

        return NextResponse.json({
            status: "success",
            data: result,
        });
    } catch (e) {
        return NextResponse.json(
            {
                status: "fail",
                message: e.message,
            },
            { status: 500 }
        );
    }
}
export async function DELETE(req, res) {
    try {
        let { searchParams } = new URL(req.url);
        let id = searchParams.get('id');
        const prisma = new PrismaClient();
        const result = await prisma.portfolio.delete({ where: { id: id } })
        return NextResponse.json({ status: "success", data: result })
    }
    catch (e) {
        return NextResponse.json({ status: "fail", data: e })
    }
}