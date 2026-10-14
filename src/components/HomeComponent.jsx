import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Mahabub-Alom-Sujon",
        icon: <FaGithub />,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mahabub-alom-sujon",
        icon: <FaLinkedinIn />,
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/8801709324178",
        icon: <FaWhatsapp />,
    },
].filter((item) => item.href);

const HomeComponent = (props) => {
    // ডেটা লোড হওয়ার আগে যেন ক্র্যাশ না করে সেজন্য সেফটি চেক
    const data = props.data && props.data[0] ? props.data[0] : {};

    return (
        <section className='home d-flex align-items-center'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-7 col-md-7 col-sm-12'>
                        <div className='home-left'>
                            <p className='subTitle mb-1'>
                                <span className='subTitleColor'>{data.top_section_subTitleColor}</span>
                                {data.top_section_subTitle}
                            </p>
                            <h2>
                                {data.top_section_heading_title_1?.split(" ").slice(0, -1).join(" ")}{" "}
                                <span style={{ color: "#21bf73" }}>
                                    {data.top_section_heading_title_1?.split(" ").slice(-1)}
                                </span>
                            </h2>
                            <h3>
                                {data.top_section_heading_title_2}{" "}
                                <span>{data.top_section_heading_title_3}</span>
                            </h3>
                            <p className='home-des'>{data.top_section_description}</p>

                            <div className="d-flex align-items-center gap-3">
                                <div className='all-btn'>
                                    <Link
                                        href="/Contact"
                                        target='_blank'
                                        rel="noopener noreferrer">
                                        {data.top_section_button_cover_text || "Contact Me"}
                                    </Link>
                                </div>
                                <div className='all-btn'>
                                    <Link
                                        href="/images/Mahabub_CV_Nextjs_Full-stack_Developer.pdf"
                                        target='_blank'
                                        rel="noopener noreferrer">
                                        Download CV
                                    </Link>
                                </div>
                            </div>

                            {/* Social links (Converted fully to Bootstrap classes for consistency) */}
                            <div className="d-flex flex-column gap-3 mt-4">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="bg-success opacity-50" style={{ height: '1px', width: '32px' }} />
                                    <p className="text-uppercase fw-bold text-muted small m-0" style={{ letterSpacing: '0.22em' }}>
                                        Find me on
                                    </p>
                                </div>
                                <div className="d-flex flex-wrap align-items-center gap-2">
                                    {socialLinks.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.name}
                                            title={item.name}
                                            className="d-flex items-center justify-content-center rounded-3 border text-decoration-none transition-all social-icon-link"
                                            style={{
                                                width: '44px',
                                                height: '44px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                                borderColor: 'rgba(255, 255, 255, 0.1)',
                                                color: '#ced4da',
                                                fontSize: '1.125rem',
                                                transition: '0.3s'
                                            }}
                                        >
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center align-items-center'>
                        <div className='home-right'>
                            <img src='/images/Mahabub-Alom.jpg' alt='Profile' className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeComponent;


// "use client";
//
// import Link from "next/link";
// import React from "react";
// import {
//     FaReact,
//     FaJs,
//     FaNodeJs,
//     FaDatabase,
//     FaCode, FaTwitter, FaWhatsapp, FaGithub, FaLinkedinIn, FaArrowRight,
// } from "react-icons/fa";
// import {
//     SiNextdotjs,
//     SiTypescript,
//     SiRedux,
//     SiTailwindcss,
//     SiMui,
//     SiShadcnui,
//     SiExpress,
//     SiJsonwebtokens,
//     SiZod,
//     SiPrisma,
//     SiRedis,
//     SiPostgresql,
//     SiMongodb,
//     SiMysql,
//     SiMongoose,
// } from "react-icons/si";
// import { BsDownload } from "react-icons/bs";
// import {FaFacebookF} from "react-icons/fa6";
// // import { SiNextdotjs, SiTypescript } from "react-icons/si";
// const HomeComponent = (props) => {
//     const home = props?.data?.[0] || {};
//     const social = props?.socialData?.[0] || props?.social?.[0] || {};
//     const heading = home.top_section_heading_title_1 || "Frontend Developer";
//     const headingWords = heading.trim().split(/\s+/);
//     const headingLastWord = headingWords.pop() || "";
//     const headingFirstWords = headingWords.join(" ");
//     const socialLinks = [
//         {
//             name: "GitHub",
//             href: "https://github.com/Mahabub-Alom-Sujon",
//             icon: <FaGithub />,
//         },
//         {
//             name: "LinkedIn",
//             href: "https://www.linkedin.com/in/mahabub-alom-sujon",
//             icon: <FaLinkedinIn />,
//         },
//         // {
//         //     name: "Facebook",
//         //     href: social.social_link_facebook,
//         //     icon: <FaFacebookF />,
//         // },
//         // {
//         //     name: "Twitter",
//         //     href: social.social_link_twitter,
//         //     icon: <FaTwitter />,
//         // },
//         {
//             name: "WhatsApp",
//             // href: social.social_link_whatsapp,
//             href: "https://wa.me/8801709324178",
//             icon: <FaWhatsapp />,
//         },
//     ].filter((item) => item.href);
//
//     const technologies = [
//         // Frontend
//         {
//             category: "Frontend",
//             name: "React.js",
//             icon: <FaReact />,
//             color: "text-cyan-400",
//         },
//         {
//             category: "Frontend",
//             name: "Next.js",
//             icon: <SiNextdotjs />,
//             color: "text-white",
//         },
//         {
//             category: "Frontend",
//             name: "TypeScript",
//             icon: <SiTypescript />,
//             color: "text-blue-400",
//         },
//         {
//             category: "Frontend",
//             name: "JavaScript",
//             icon: <FaJs />,
//             color: "text-yellow-400",
//         },
//         {
//             category: "Frontend",
//             name: "Redux Toolkit",
//             icon: <SiRedux />,
//             color: "text-purple-400",
//         },
//         {
//             category: "Frontend",
//             name: "Tailwind CSS",
//             icon: <SiTailwindcss />,
//             color: "text-cyan-300",
//         },
//         {
//             category: "Frontend",
//             name: "Material UI",
//             icon: <SiMui />,
//             color: "text-blue-400",
//         },
//         {
//             category: "Frontend",
//             name: "Shadcn UI",
//             icon: <SiShadcnui />,
//             color: "text-white",
//         },
//
//         // Backend
//         {
//             category: "Backend",
//             name: "Node.js",
//             icon: <FaNodeJs />,
//             color: "text-green-400",
//         },
//         {
//             category: "Backend",
//             name: "Express.js",
//             icon: <SiExpress />,
//             color: "text-gray-200",
//         },
//         {
//             category: "Backend",
//             name: "REST API",
//             icon: <FaCode />,
//             color: "text-emerald-400",
//         },
//         {
//             category: "Backend",
//             name: "JWT",
//             icon: <SiJsonwebtokens />,
//             color: "text-pink-400",
//         },
//         {
//             category: "Backend",
//             name: "Zod",
//             icon: <SiZod />,
//             color: "text-blue-300",
//         },
//         {
//             category: "Backend",
//             name: "Prisma",
//             icon: <SiPrisma />,
//             color: "text-gray-200",
//         },
//         {
//             category: "Backend",
//             name: "Redis",
//             icon: <SiRedis />,
//             color: "text-red-400",
//         },
//
//         // Database
//         {
//             category: "Database",
//             name: "PostgreSQL",
//             icon: <SiPostgresql />,
//             color: "text-sky-400",
//         },
//         {
//             category: "Database",
//             name: "MongoDB",
//             icon: <SiMongodb />,
//             color: "text-green-400",
//         },
//         {
//             category: "Database",
//             name: "MySQL",
//             icon: <SiMysql />,
//             color: "text-blue-300",
//         },
//         {
//             category: "Database",
//             name: "Mongoose",
//             icon: <SiMongoose />,
//             color: "text-red-400",
//         },
//     ];
//
//     return (
//         <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#050d0a] text-white">
//             {/* Background gradients */}
//             <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_20%,rgba(33,191,115,0.13),transparent_40%),radial-gradient(ellipse_at_85%_75%,rgba(33,191,115,0.10),transparent_35%)]" />
//             <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:55px_55px]" />
//             <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#21bf73]/10 blur-[120px]" />
//             <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-[130px]" />
//             <div className="container relative mx-auto px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
//                 <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
//                     {/* LEFT CONTENT */}
//                     <div className="relative z-10 mx-auto w-full max-w-2xl lg:mx-0">
//                         {/* Intro badge */}
//                         <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2.5 shadow-lg shadow-emerald-950/30 backdrop-blur-xl">
//                             <span className="relative flex h-2.5 w-2.5">
//                                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#21bf73] opacity-70" />
//                                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#21bf73]" />
//                             </span>
//                             <span className="text-xs font-semibold tracking-wide text-emerald-100 sm:text-sm">
//                                 WELCOME TO MY DIGITAL SPACE
//                             </span>
//                         </div>
//                         {/* Main heading */}
//                         <h1 className="mb-5 text-4xl font-black leading-[1.13] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
//                             <span className="block text-white">
//                                 {headingFirstWords || headingLastWord}
//                             </span>
//                             {headingFirstWords && (
//                                 <span className="mt-1 block bg-gradient-to-r from-[#21bf73] via-[#7aefad] to-[#c2ffda] bg-clip-text pb-2 text-transparent">
//                                     {headingLastWord}
//                                 </span>
//                             )}
//                         </h1>
//
//                         {/* Designation */}
//                         <h2 className="mb-5 text-xl font-semibold leading-relaxed text-gray-200 sm:text-2xl">
//                             {home.top_section_heading_title_2 || "Building Modern Web Experiences"}
//                             {home.top_section_heading_title_3 && (
//                                 <span className="text-[#21bf73]">
//                                     {" "}
//                                     {home.top_section_heading_title_3}
//                                 </span>
//                             )}
//                         </h2>
//
//                         {/* Description */}
//                         <p className="mb-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
//                             {home.top_section_description ||
//                                 "I build responsive, accessible, and high-performance web applications with React.js, Next.js, and TypeScript — turning ideas into meaningful digital experiences."}
//                         </p>
//
//                         {/* CTA buttons */}
//                         <div className="mb-9 flex flex-wrap items-center gap-4">
//                             <Link
//                                 href="/Contact"
//                                 className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#21bf73] to-[#43d990] px-6 py-3.5 font-bold text-[#06140c] no-underline shadow-[0_8px_30px_rgba(33,191,115,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(33,191,115,0.35)]"
//                             >
//                                 {home.top_section_button_cover_text || "Let's Talk"}
//                                 <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                             </Link>
//                             <a
//                                 href="/images/Mahabub_CV_Nextjs_Full-stack_Developer.pdf"
//                                 download
//                                 className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white no-underline backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-400/10"
//                             >
//                                 <BsDownload className="text-lg text-[#21bf73] transition-transform duration-300 group-hover:translate-y-0.5" />
//                                 Download CV
//                             </a>
//                         </div>
//
//                         {/* Social links */}
//                         <div className="flex flex-col gap-4">
//                             <div className="flex items-center gap-3">
//                                 <span className="h-px w-8 bg-[#21bf73]/60" />
//                                 <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
//                                     Find me on
//                                 </p>
//                             </div>
//
//                             <div className="flex flex-wrap items-center gap-3">
//                                 {socialLinks.map((item) => (
//                                     <a
//                                         key={item.name}
//                                         href={item.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         aria-label={item.name}
//                                         title={item.name}
//                                         className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-gray-300 no-underline backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#21bf73]/60 hover:bg-[#21bf73] hover:text-[#06140c] hover:shadow-lg hover:shadow-[#21bf73]/20"
//                                     >
//                                         {item.icon}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Tech stack */}
//                         {/*<div className="mt-10 border-t border-white/[0.08] pt-6">*/}
//                         {/*    <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">*/}
//                         {/*        Technologies I Work With*/}
//                         {/*    </p>*/}
//                         {/*    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">*/}
//                         {/*        {technologies.map((tech) => (*/}
//                         {/*            <div*/}
//                         {/*                key={tech.name}*/}
//                         {/*                title={`${tech.category}: ${tech.name}`}*/}
//                         {/*                className="group inline-flex min-w-0 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#21bf73]/40 hover:bg-[#21bf73]/10 sm:px-3"*/}
//                         {/*            >*/}
//                         {/*                <span className={`shrink-0 text-base ${tech.color}`}>*/}
//                         {/*                    {tech.icon}*/}
//                         {/*                </span>*/}
//                         {/*                <span className="truncate text-xs font-medium text-gray-300 transition-colors group-hover:text-white sm:text-sm">*/}
//                         {/*                    {tech.name}*/}
//                         {/*                </span>*/}
//                         {/*            </div>*/}
//                         {/*        ))}*/}
//                         {/*    </div>*/}
//                         {/*</div>*/}
//                     </div>
//
//                     {/* RIGHT 3D PROFILE */}
//                     <div className="relative mx-auto flex w-full max-w-lg items-center justify-center py-8 lg:py-12">
//                         {/* Ambient glow */}
//                         <div className="absolute h-64 w-64 rounded-full bg-[#21bf73]/20 blur-[90px] sm:h-80 sm:w-80" />
//                         {/* Outer ring */}
//                         <div className="absolute h-[290px] w-[290px] rounded-full border border-emerald-400/20 sm:h-[390px] sm:w-[390px] lg:h-[440px] lg:w-[440px]" />
//                         {/* Dashed rotating ring */}
//                         <div className="hero-rotate absolute h-[265px] w-[265px] rounded-full border border-dashed border-[#21bf73]/35 sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />
//                         {/* Inner glow circle */}
//                         <div className="absolute h-[235px] w-[235px] rounded-full bg-gradient-to-br from-[#21bf73]/20 via-emerald-900/10 to-transparent sm:h-[310px] sm:w-[310px] lg:h-[350px] lg:w-[350px]" />
//                         {/* Profile image frame */}
//                         <div className="hero-float relative z-10 h-[245px] w-[245px] rounded-full bg-gradient-to-br from-[#21bf73] via-emerald-300/50 to-transparent p-[3px] shadow-[0_0_70px_rgba(33,191,115,0.18)] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px]">
//                             <div className="h-full w-full overflow-hidden rounded-full border-[5px] border-[#09150f] bg-[#10251a]">
//                                 <img
//                                     // src={ home.profile_img || "/images/Mahabub-Alom.jpg" }
//                                     src='/images/Mahabub-Alom.jpg'
//                                     alt="Mahabub Alom Sujon - Frontend Developer"
//                                     className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
//                                 />
//                             </div>
//                         </div>
//                         {/* Floating card: developer */}
//                         <div className="absolute -left-1 top-8 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0c1c13]/90 p-3.5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:-left-2 sm:top-14 sm:p-4">
//                             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#21bf73]/15 text-xl text-[#21bf73]">
//                                 <FaCode />
//                             </div>
//                             <div>
//                                 <p className="text-xs text-gray-400">
//                                     Focused on
//                                 </p>
//                                 <p className="text-sm font-bold text-white">
//                                     Web Development
//                                 </p>
//                             </div>
//                         </div>
//
//                         {/* Floating card: technologies */}
//                         <div className="absolute -right-1 bottom-10 z-20 rounded-2xl border border-white/10 bg-[#0c1c13]/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:-right-2 sm:bottom-14 sm:p-5">
//                             <p className="mb-3 text-xs font-medium text-gray-400">
//                                 Building with
//                             </p>
//
//                             <div className="flex items-center gap-3">
//                                 <FaReact className="text-2xl text-cyan-400" />
//                                 <SiNextdotjs className="text-2xl text-white" />
//                                 <SiTypescript className="text-2xl text-blue-400" />
//                             </div>
//                         </div>
//
//                         {/* Decorative floating dots */}
//                         <div className="absolute right-10 top-3 h-3 w-3 rounded-full bg-[#21bf73] shadow-[0_0_20px_rgba(33,191,115,0.8)] sm:right-16 sm:top-0" />
//                         <div className="absolute bottom-4 left-10 h-2 w-2 rounded-full bg-emerald-200/80 sm:bottom-2 sm:left-16" />
//                     </div>
//                 </div>
//             </div>
//
//             {/* Bottom accent */}
//             <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#21bf73]/50 to-transparent" />
//
//             {/* Local animations */}
//             <style jsx>{`
//                 .hero-float {
//                     animation: heroFloat 5s ease-in-out infinite;
//                 }
//
//                 .hero-rotate {
//                     animation: heroRotate 35s linear infinite;
//                 }
//
//                 @keyframes heroFloat {
//                     0%,
//                     100% {
//                         transform: translateY(0);
//                     }
//                     50% {
//                         transform: translateY(-10px);
//                     }
//                 }
//
//                 @keyframes heroRotate {
//                     from {
//                         transform: rotate(0deg);
//                     }
//                     to {
//                         transform: rotate(360deg);
//                     }
//                 }
//
//                 @media (prefers-reduced-motion: reduce) {
//                     .hero-float,
//                     .hero-rotate {
//                         animation: none;
//                     }
//                 }
//             `}</style>
//         </section>
//     );
// };
//
// export default HomeComponent;
