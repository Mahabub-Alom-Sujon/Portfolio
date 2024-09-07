import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const PortfolioSkeleton = () => {
    return (
        <section id='project' className='portfolio'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title text-center'>
                            <h2 className='text-[50px] font-black uppercase'>my <span className='text-[#50d71e]'>Projects</span></h2>
                            <div className='divider'></div>
                        <p className='title-des relative uppercase'>a few recent design and coding projects. Want to see more? Email me.</p>                        </div>                     </div>
                </div>
                <div className='row pt-[60px]'>
                    {
                        [...Array(3)].map((_, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="group rounded-2xl bg-btn p-[30px]">
                                        <SkeletonTheme baseColor="#1D1C22" highlightColor="#36404A">
                                            <Skeleton height={238} />
                                        <p className="mt-[16px]"><Skeleton width="60%" /></p>
                                        <p><Skeleton width="40%" /></p>
                                    </SkeletonTheme>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default PortfolioSkeleton;