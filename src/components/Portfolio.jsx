import React from 'react';
import { PrismaClient } from "@prisma/client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link';
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    const prisma = new PrismaClient();
    let Project = await prisma.portfolio.findMany({
        select: {
            id: true,
            title:true,
            category:true,
            github_link:true,
            live_link:true,
            backend_link:true,
            img:true,
            technology_list:true,
        }
    })
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
                            <h2 className='text-[50px] font-black uppercase'>my <span className='text-[#21bf73]'>Projects</span></h2>
                            <div className='divider'></div>
                        <p className='title-des relative uppercase'>a few recent design and coding projects. Want to see more? Email me.</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-[60px]">
                    {/*{JSON.stringify(data['Project'])}*/}
                    {data["Project"]?.map((item, i) => (
                        <div className="col-lg-4 col-md-6" key={i}>
                            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-btn shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                                {/* Project Image */}
                                <Link
                                    href={item?.live_link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block overflow-hidden"
                                >
                                    <img
                                        src={item?.img}
                                        alt={item?.category || "Project preview"}
                                        className="h-[220px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 sm:h-[250px]"
                                    />
                                </Link>

                                {/* Project Content */}
                                <div className="flex flex-1 flex-col p-5 sm:p-6">

                                    {/* Project Title */}
                                    <Link
                                        href={item?.live_link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white no-underline transition-colors duration-300 hover:text-[#21bf73]"
                                    >
                                        <h3 className="mb-0 mt-2 text-lg font-semibold capitalize sm:text-xl">
                                            {item?.category}
                                        </h3>
                                    </Link>

                                    {/* Description */}
                                    <p className="mt-3 text-sm leading-6 text-text">
                                        {item?.title}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-3">
                                        <ul className="flex flex-wrap gap-2 p-0">
                                            {item?.technology_list?.map((tech, index) => (
                                                <li
                                                    key={`${tech?.name}-${index}`}
                                                    className="list-none"
                                                >
                                                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text transition-colors duration-300 hover:border-[#21bf73] hover:text-[#21bf73] sm:text-sm">
                                                        {tech?.name}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                                        {/* GitHub Button */}
                                        {item?.github_link && (
                                            <Link
                                                href={item.github_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center 1 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white no-underline transition-all duration-300 hover:border-[#21bf73] hover:bg-[#21bf73]"
                                            >
                                                <FaGithub />
                                                <span>GitHub</span>
                                            </Link>
                                        )}

                                        {/* Backend Button */}
                                        {item?.backend_link && (
                                            <Link
                                                href={item.backend_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-1 rounded-lg border border-blue-400/40 px-4 py-2 text-sm font-medium text-white no-underline transition-all duration-300 hover:border-[#21bf73] hover:bg-[#21bf73]"
                                            >
                                                <FaExternalLinkAlt />
                                                <span>Backend</span>
                                            </Link>
                                        )}

                                        {/* Live Demo Button */}
                                        {item?.live_link && (
                                            <Link
                                                href={item.live_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#21bf73] px-4 py-2 text-sm font-medium text-white no-underline transition-all duration-300 hover:opacity-80"
                                            >
                                                <FaExternalLinkAlt />
                                                <span>Live Demo</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;