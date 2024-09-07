"use client"
import React from 'react';
import StarRatings from 'react-star-ratings';
const Testimonial =(props) => {
    return (
        <section className='testimonial'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='text-center title'>
                            <h2 className='text-white text-[50px] font-black uppercase'>Testi<span className='text-[#50d71e]'>monials.</span></h2>
                            <div className='divider'></div>
                            <p className='text-white uppercase relative'>WHAT OTHER SAY</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        props.data.map((item, i) => {
                            return <div className='col-lg-4 col-md-6 mt-10' key={i}>
                                <div className='group rounded-xl bg-btn p-[30px]'> 
                                    <div className='text-center'>
                                        <div className='w-[80px] overflow-hidden rounded-full m-auto outline outline-3 outline-[#72b626]'>
                                            <img src={item.img} />
                                        </div>
                                        <div className='mt-[20px]'>
                                            <h3 className="text-[20px] text-white">{item.title_name}</h3>
                                            <h6 className='text-[12px] text-text'>{item.sub_heading}</h6>
                                            <div className='mt-[5px]'>
                                            <StarRatings
                                                rating={parseFloat(item.rating)}
                                                starDimension="20px"
                                                starRatedColor="#F6C800"
                                                starSpacing="2px"
                                            />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-[20px] border-t border-[#fff]'></div>
                                    <p className='mb-0'>{item.long_des}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;