import Link from 'next/link';
import React from 'react';
import { BsDownload } from "react-icons/bs";

const HomeComponent = (props) => {
    return (
        <section className='home d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                     {/* {JSON.stringify(props.data)} */}
                    <div className='col-lg-7 col-md-7 col-sm-12'>
                        <div className='home-left'>
                            <p className='subTitle mb-1'>
                                <span className='subTitleColor'>{props.data[0].top_section_subTitleColor}</span>
                                {props.data[0].top_section_subTitle}
                            </p>
                            <h2>
                                {props.data[0].top_section_heading_title_1.split(" ").slice(0, -1).join(" ")}{" "}
                                <span style={{color: "#21bf73"}}>
                                    {props.data[0].top_section_heading_title_1.split(" ").slice(-1)}
                                </span>
                            </h2>
                            <h3>{props.data[0].top_section_heading_title_2}
                                <span>{props.data[0].top_section_heading_title_3}</span>
                            </h3>
                            <p className='home-des'>{props.data[0].top_section_description}</p>
                            <div className="d-flex align-items-center  gap-3">
                                <div className='all-btn'>
                                    <Link
                                          href="/Contact"
                                          target='_blank'
                                          rel="noopener noreferer">
                                        {props.data[0].top_section_button_cover_text}
                                    </Link>
                                </div>
                                <div className='all-btn'>
                                    <Link
                                          href="/images/Mahabub_CV_Nextjs_Full-stack_Developer.pdf"
                                          target='_blank'
                                          rel="noopener noreferer">
                                        Download CV
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center align-items-center'>
                        <div className='home-right'>
                        <img src='/images/Mahabub-Alom.jpg' alt='Profile'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HomeComponent;