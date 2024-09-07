import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { PrismaClient } from "@prisma/client";
async function getData() {
    const prisma = new PrismaClient();
    let Service = await prisma.service.findMany()
  
  return {Service}
}
const Service = async () => {
    const data=await getData()
    return (
        <section id='service' className='bg-[#ECF0F3] service py-[70px]'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='text-center title'>
                            <h2 className='text-black text-[50px] font-black uppercase'>Our <span className='text-[#50d71e]'>Service!</span></h2>
                            <div className='divider'></div>
                            <p className='text-black uppercase'>Web design and development encompasses the creation and maintenance of websites.</p>
                        </div>
                    </div>
                </div>
                <div className='row pt-[60px]'>
                    {
                        data.Service.map((item, i) => {
                            return<div className='col-lg-4 col-md-6 col-sm-12' key={i}>
                                    <div className='card border-0'>
                                        <div className='card-body p-[30px]'>
                                            <img className='w-[60px]' src='/images/designer.png' />
                                            <div className='mt-[20px]'>
                                                <h4 className='text-[24px] font-semibold text-black'>{item.title }</h4>
                                            </div>
                                            <ul className='mt-[20px] pl-0 mb-0'>
                                                <li className='flex items-center text-[#919295] pb-2'><FaCheck className='mr-[8px]' />{item.sub_heading1 }</li>
                                                <li className='flex items-center text-[#919295] pb-2'><FaCheck className='mr-[8px]' />{item.sub_heading2 }</li>
                                                <li className='flex items-center text-[#919295] pb-2'><FaCheck className='mr-[8px]' />{item.sub_heading3 }</li>
                                                <li className='flex items-center text-[#919295] pb-2'><FaCheck className='mr-[8px]' />{item.sub_heading4 }</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;