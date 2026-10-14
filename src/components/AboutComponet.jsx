// import React from 'react';
// import Link from "next/link";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
//
// const AboutComponet = (props) => {
//     return (
//         <>
//             <section  id="about" className='about-page'>
//                 <div className="container">
//                     <div className='row'>
//                          <div className='col-lg-12'>
//                             <div className='about-title'>
//                                 <h2>about <span>me</span></h2>
//                                  <div className='divider'></div>
//                                 <p>I design and code beautiful things, and I love what I do.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='row mt-5'>
//                         <div className='col-lg-4 col-md-5 col-sm-12'>
//                             <div className='about-left'>
//                                 <div className='card border-0'>
//                                     <div className='card-body'>
//                                         <div className='text-center my-4'>
//                                             <h3>{props.About[0].top_title_heading}
//                                                 <span>{props.About[0].top_title_heading_theme_color}</span></h3>
//                                             <p>{props.About[0].top_title_subHeading}</p>
//                                             <div className='d-flex justify-content-center'>
//                                                 <img src='/images/Mahabub-Alom.jpg'/>
//
//                                             </div>
//                                             <div className='about-bottom'>
//                                                 <p className='mb-2'>{props.About[0].info_content_email}</p>
//                                                 <p className='mb-2'>{props.About[0].info_content_address}</p>
//                                                 <ul className='pl-0 mb-3'>
//                                                     <li>
//                                                         <Link href={props.About[0].social_link_facebook}
//                                                               target="_blank"><FaFacebookF/></Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link href={props.About[0].social_link_git}
//                                                               target="_blank"><FaGithub/></Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link href={props.About[0].social_link_linkdin} target="_blank"><FaLinkedinIn/></Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link href={props.About[0].social_link_twitter} target="_blank"><FaTwitter/></Link>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-8 col-md-7 col-sm-12'>
//                             <div className="card border-0">
//                                 <div className="card-body">
//                                     <div className='about-right'>
//                                         <div className='text-contain'>
//                                             <p>
//                                                 Hello! I'm <strong>Mahabub Alom Sujon</strong>, a passionate
//                                                 Full-Stack Web Developer specializing in React.js,
//                                                 Next.js, Node.js, Express.js, MongoDB, PostgreSQL,
//                                                 and Prisma. I enjoy building modern, responsive,
//                                                 and user-friendly web applications that solve
//                                                 real-world problems.
//                                             </p>
//                                             <p>
//                                                 My programming journey began with a curiosity about
//                                                 how websites work. Starting with HTML, CSS, and
//                                                 JavaScript, I gradually expanded my skills into
//                                                 modern frontend frameworks, backend development,
//                                                 databases, and cloud deployment. Through continuous
//                                                 learning, real-world projects, and hands-on practice,
//                                                 I have grown into a confident full-stack developer.
//                                             </p>
//                                             <p>
//                                                 I enjoy developing full-stack applications,
//                                                 designing responsive user interfaces, building
//                                                 RESTful APIs, optimizing application performance,
//                                                 and solving challenging programming problems.
//                                                 Every project is an opportunity to learn,
//                                                 improve, and create something meaningful.
//                                             </p>
//                                             <p>
//                                                 Outside of programming, I enjoy learning about
//                                                 Artificial Intelligence, reading technical blogs,
//                                                 watching football, and exploring new technologies.
//                                                 I believe consistency, curiosity, and continuous
//                                                 learning are the keys to becoming a better software
//                                                 engineer.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };
//
// export default AboutComponet;

import React from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import {FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp} from "react-icons/fa";

const AboutComponet = (props) => {
    const about = props.About?.[0];

    if (!about) {
        return null;
    }

    const socialLinks = [
        {
            // url: about.social_link_git,
            url: "https://github.com/Mahabub-Alom-Sujon",
            label: "GitHub",
            icon: <FaGithub />,
        },
        {
            // url: about.social_link_linkdin,
            url: "https://www.linkedin.com/in/mahabub-alom-sujon",
            label: "LinkedIn",
            icon: <FaLinkedinIn />,
        },
        {
            // url: about.social_link_twitter,
            url: "https://wa.me/8801709324178",
            label: "WhatsApp",
            icon: <FaWhatsapp />,
        },
    ];

    return (
        <section id="about" className="about-page">
            <div className="container">
                {/* About Header */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-title">
                            <h2>
                                about <span>me</span>
                            </h2>
                            <div className="divider"></div>
                            <p>
                                I design and code beautiful things, and I love
                                what I do.
                            </p>
                        </div>
                    </div>
                </div>

                {/* About Content */}
                <div className="row mt-5">
                    {/* Left Profile Card */}
                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <div className="about-left">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="text-center my-4">
                                        <h3>
                                            {about.top_title_heading}{" "}
                                            <span>
                                                {about.top_title_heading_theme_color}
                                            </span>
                                        </h3>

                                        <p>{about.top_title_subHeading}</p>

                                        <div className="d-flex justify-content-center">
                                            <img
                                                src="/images/Mahabub-Alom.jpg"
                                                alt="Mahabub Alom Sujon"
                                                className="img-fluid"
                                            />
                                        </div>

                                        <div className="about-bottom">
                                            <p className="mb-2">
                                                {about.info_content_email}
                                            </p>

                                            <p className="mb-2">
                                                {about.info_content_address}
                                            </p>

                                            {/* Social Links */}
                                            <ul className="pl-0 mb-3 d-flex justify-content-center gap-3 list-unstyled">
                                                {socialLinks.map(
                                                    (social) => {
                                                        if (
                                                            typeof social.url !==
                                                            "string" ||
                                                            !social.url.trim()
                                                        ) {
                                                            return null;
                                                        }

                                                        return (
                                                            <li key={social.label}>
                                                                <Link
                                                                    href={social.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    aria-label={social.label}
                                                                >
                                                                    {social.icon}
                                                                </Link>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right About Description */}
                    <div className="col-lg-8 col-md-7 col-sm-12">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="about-right">
                                    <div className="text-contain">
                                        <p>
                                            Hello! I'm{" "}
                                            <strong>
                                                Mahabub Alom Sujon
                                            </strong>
                                            , a passionate Full-Stack Web
                                            Developer specializing in React.js,
                                            Next.js, Node.js, Express.js,
                                            MongoDB, PostgreSQL, and Prisma. I
                                            enjoy building modern, responsive,
                                            and user-friendly web applications
                                            that solve real-world problems.
                                        </p>

                                        <p>
                                            My programming journey began with a
                                            curiosity about how websites work.
                                            Starting with HTML, CSS, and
                                            JavaScript, I gradually expanded my
                                            skills into modern frontend
                                            frameworks, backend development,
                                            databases, and cloud deployment.
                                            Through continuous learning,
                                            real-world projects, and hands-on
                                            practice, I have grown into a
                                            confident full-stack developer.
                                        </p>

                                        <p>
                                            I enjoy developing full-stack
                                            applications, designing responsive
                                            user interfaces, building RESTful
                                            APIs, optimizing application
                                            performance, and solving challenging
                                            programming problems. Every project
                                            is an opportunity to learn, improve,
                                            and create something meaningful.
                                        </p>

                                        <p>
                                            Outside of programming, I enjoy
                                            learning about Artificial
                                            Intelligence, reading technical
                                            blogs, watching football, and
                                            exploring new technologies. I
                                            believe consistency, curiosity, and
                                            continuous learning are the keys to
                                            becoming a better software engineer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Right About Description */}
                </div>
            </div>
        </section>
    );
};

export default AboutComponet;