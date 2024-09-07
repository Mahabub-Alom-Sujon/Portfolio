import React from 'react';
const Footer = () => {
    return (
        <section className='bg-[#f8f8f8] py-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='text-center'>
                            <p className='text-black mb-0 '>Copyright <span className='text-[#72b626]'>mahabub</span> &copy;2024.  All rights reserved</p>
                            <div className=' flex justify-center text-center'>
                                <img className='w-72' src='/images/logo-3.png' alt='Footer'/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;