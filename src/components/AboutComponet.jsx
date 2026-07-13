// import Link from 'next/link';
// import React from 'react';
// import { FaFacebookF } from "react-icons/fa6";
// import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// //import { Progress } from "@material-tailwind/react";
// import { Progress, Typography } from "../helpers/MaterialTailwind.js";
// const AboutComponet = (props) => {
//     return (
//         <section id="about" className='about-page'>
//             <div className='container'>
//                 <div className='row'>
//                     {/* {JSON.stringify(props.About)} */}
//                     <div className='col-lg-12'>
//                         <div className='about-title'>
//                             <h2>about <span>me</span></h2>
//                             <div className='divider'></div>
//                             <p>I design and code beautiful things, and I love what I do.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='row mt-5'>
//                     <div className='col-lg-4 col-md-5'>
//                         <div className='about-left'>
//                             <div className='card border-0'>
//                                 <div className='card-body'>
//                                     <div className='text-center my-4'>
//                                         <h3>{props.About[0].top_title_heading} <span>{props.About[0].top_title_heading_theme_color }</span></h3>
//                                         <p>{props.About[0].top_title_subHeading}</p>
//                                         <div className='d-flex justify-content-center'>
//                                             <img src='/images/Mahabub-Alom.jpg'/>
//
//                                         </div>
//                                         <div className='about-bottom'>
//                                             <p className='mb-2'>{props.About[0].info_content_email }</p>
//                                             <p className='mb-2'>{props.About[0].info_content_address}</p>
//                                             <ul className='pl-0 mb-3'>
//                                                 <li>
//                                                     <Link href={props.About[0].social_link_facebook} target="_blank"><FaFacebookF/></Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href={props.About[0].social_link_git} target="_blank"><FaGithub/></Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href={props.About[0].social_link_linkdin} target="_blank"><FaLinkedinIn/></Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link href={props.About[0].social_link_twitter} target="_blank"><FaTwitter/></Link>
//                                                 </li>
//                                             </ul>
//                                             <div className='all-btn'>
//                                                 <Link className='mt-0'
//                                                     href="/images/Mahabub_CV_Nextjs_Full-stack_Developer.pdf"
//                                                     target='_blank'
//                                                     rel="noopener noreferer">
//                                                     {props.About[0].button_title}
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-lg-8 col-md-7'>
//                         <div className='card border-0'>
//                             <div className='card-body m-0'>
//                                 <div className='about-right'>
//                                     <h3>{props.About[0].personal_section_heading_title}</h3>
//                                     <div className='row'>
//                                         <div className='col-lg-6'>
//                                             <ul className='pl-0'>
//                                                 <li>
//                                                     <p className='details-name mb-0'>Full Name</p>
//                                                     <p className='details-name-2'>{ props.About[0].personal_fullName}</p>
//                                                 </li>
//                                                 <li>
//                                                     <p className='details-name mb-0'>Email</p>
//                                                     <p className='details-name-2'>{props.About[0].personal_email}</p>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                         <div className='col-lg-6'>
//                                             <ul className='pl-0'>
//                                                 <li>
//                                                     <p className='details-name mb-0'>Phone</p>
//                                                     <p className='details-name-2'>{props.About[0].personal_phone}</p>
//                                                 </li>
//                                                 <li>
//                                                     <p className='details-name mb-0'>Nationality</p>
//                                                     <p className='details-name-2'>{props.About[0].personal_nationality}</p>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='card mt-4 border-0'>
//                             <div className='card-body'>
//                                 <div className='education'>
//                                     <h3 className='text-2xl'>Education</h3>
//                                     <ul className='pl-0'>
//                                     {
//                                         props.Education.map((item, i) => {
//                                             return<li key={i}>
//                                                 <p className='edu-title mb-0'>{item.title}</p>
//                                                 <p className='edu-title-2'>{item.long_des}</p>
//                                                 <span><SlCalender/></span>
//                                                 <span>{item.time_section}</span>
//                                             </li>
//                                         })
//                                     }
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default AboutComponet;
import React from 'react';
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const AboutComponet = (props) => {
    return (
        <>
            <section  id="about" className='about-page'>
                <div className="container">
                    <div className='row'>
                         <div className='col-lg-12'>
                            <div className='about-title'>
                                <h2>about <span>me</span></h2>
                                 <div className='divider'></div>
                                <p>I design and code beautiful things, and I love what I do.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 col-md-5 col-sm-12'>
                            <div className='about-left'>
                                <div className='card border-0'>
                                    <div className='card-body'>
                                        <div className='text-center my-4'>
                                            <h3>{props.About[0].top_title_heading}
                                                <span>{props.About[0].top_title_heading_theme_color}</span></h3>
                                            <p>{props.About[0].top_title_subHeading}</p>
                                            <div className='d-flex justify-content-center'>
                                                <img src='/images/Mahabub-Alom.jpg'/>

                                            </div>
                                            <div className='about-bottom'>
                                                <p className='mb-2'>{props.About[0].info_content_email}</p>
                                                <p className='mb-2'>{props.About[0].info_content_address}</p>
                                                <ul className='pl-0 mb-3'>
                                                    <li>
                                                        <Link href={props.About[0].social_link_facebook}
                                                              target="_blank"><FaFacebookF/></Link>
                                                    </li>
                                                    <li>
                                                        <Link href={props.About[0].social_link_git}
                                                              target="_blank"><FaGithub/></Link>
                                                    </li>
                                                    <li>
                                                        <Link href={props.About[0].social_link_linkdin} target="_blank"><FaLinkedinIn/></Link>
                                                    </li>
                                                    <li>
                                                        <Link href={props.About[0].social_link_twitter} target="_blank"><FaTwitter/></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-7 col-sm-12'>
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className='about-right'>
                                        <div className='text-contain'>
                                            <p>
                                                Hello! I'm <strong>Mahabub Alom Sujon</strong>, a passionate
                                                Full-Stack Web Developer specializing in React.js,
                                                Next.js, Node.js, Express.js, MongoDB, PostgreSQL,
                                                and Prisma. I enjoy building modern, responsive,
                                                and user-friendly web applications that solve
                                                real-world problems.
                                            </p>
                                            <p>
                                                My programming journey began with a curiosity about
                                                how websites work. Starting with HTML, CSS, and
                                                JavaScript, I gradually expanded my skills into
                                                modern frontend frameworks, backend development,
                                                databases, and cloud deployment. Through continuous
                                                learning, real-world projects, and hands-on practice,
                                                I have grown into a confident full-stack developer.
                                            </p>
                                            <p>
                                                I enjoy developing full-stack applications,
                                                designing responsive user interfaces, building
                                                RESTful APIs, optimizing application performance,
                                                and solving challenging programming problems.
                                                Every project is an opportunity to learn,
                                                improve, and create something meaningful.
                                            </p>
                                            <p>
                                                Outside of programming, I enjoy learning about
                                                Artificial Intelligence, reading technical blogs,
                                                watching football, and exploring new technologies.
                                                I believe consistency, curiosity, and continuous
                                                learning are the keys to becoming a better software
                                                engineer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutComponet;