import React from 'react';
import { PrismaClient } from "@prisma/client";
import Link from 'next/link';
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    const prisma = new PrismaClient();
    let Project = await prisma.portfolio.findMany()
    return {Project}
}
const Portfolio =async () => {
    const data=await getData()
    return (
        <section id='project' className='portfolio'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title text-center'>
                            <h2 className='text-[50px] font-black uppercase'>my <span className='text-[#50d71e]'>Projects</span></h2>
                            <div className='divider'></div>
                        <p className='title-des relative uppercase'>a few recent design and coding projects. Want to see more? Email me.</p>                        </div>                     </div>
                </div>
                <div className="row pt-[60px]">
                    {data["Project"]?.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="group rounded-2xl bg-btn p-[30px]">
                                    <Link href={item.link} target="_blank">
                                        <div className="overflow-hidden rounded-2xl">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="w-full h-[250px] transition-all duration-500 group-hover:scale-[110%]"
                                            />
                                        </div>
                                    </Link>
                                    <div>
                                        <p className="mt-[16px] text-[14px] text-text">{item.title}</p>
                                        <div className="portfolio-button-open cursor-pointer text-white transition-all duration-300 hover:text-theme">
                                            <Link className="text-white no-underline" href={item.link} target="_blank">
                                                <h3 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                                                    {item.category}
                                                </h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;