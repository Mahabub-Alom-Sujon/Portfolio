import { data } from 'autoprefixer';
import Link from 'next/link';
import React from 'react';

const HomeComponent = (props) => {
    return (
        <section className='home d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                     {/* {JSON.stringify(props.data)} */}
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <div className='home-left'>
                            <p className='subTitle'>
                                <span className='subTitleColor'>{props.data[0].top_section_subTitleColor}</span>
                                {props.data[0].top_section_subTitle}
                            </p>
                            <h2>{props.data[0].top_section_heading_title_1}</h2>
                            <h2>{props.data[0].top_section_heading_title_2} <span>{props.data[0].top_section_heading_title_3 }</span></h2>
                            <p className='home-des'>{props.data[0].top_section_description}</p>
                            <div className='all-btn'>
                                <Link className='px-12'
                                    href="/Contact"
                                    target='_blank' 
                                    rel="noopener noreferer">
                                    {props.data[0].top_section_button_cover_text}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center'>
                        <div className='home-right'>
                            <img src='/images/Mahabub-Alom.jpg' alt='Profile' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default HomeComponent;