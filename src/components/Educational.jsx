import React from 'react';
import {SlCalender} from "react-icons/sl";

const Educational = () => {
    return (
        <section id="educational" className="educational-page">
            <div className="container">
                <div className="row">
                    <div className='col-12'>
                        <div className='title text-center'>
                            <h2 className='text-[50px] font-black uppercase text-black'>My <span
                                className='text-[#21bf73]'>Education</span></h2>
                            <div className='divider'></div>
                            <p className='title-des relative uppercase text-black'>
                                Building knowledge through education, continuous learning, and practical development experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className='col-lg-6 col-xxl-6 col-xl-6 col-md-6 col-sm-12'>
                        <div className="card mt-4 border-0">
                            <div className="card-body">
                                <div className='education-text'>
                                    <ul className='pl-0'>
                                        <li>
                                            <p className='edu-title mb-0'>Higher Secondary School Certificate (HSC)</p>
                                            <p className='edu-title-2'>Shariatpur Govt.College</p>
                                            <span><SlCalender/></span>
                                            <span>2015-2017</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xxl-6 col-xl-6 col-md-6 col-sm-12'>
                        <div className="card mt-4 border-0">
                            <div className="card-body">
                                <div className='education-text'>
                                    <ul className='pl-0'>
                                        <li>
                                            <p className='edu-title mb-0'>Bachelor of Arts in Political Science (Honours)</p>
                                            <p className='edu-title-2'>National University, Bangladesh</p>
                                            <span><SlCalender/></span>
                                            <span>2018-2021</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Educational;