"use client"
import React, { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from 'next/link'
const AppNavbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const sidebarControl = () => {
        setSidebar(!sidebar);
    };
    return (
        <>
            <div className='main-nav'>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                         <div className='col-lg-4 col-md-6'>
                            <Link className="navbar-brand" href="/">
                                <img  src='/images/logo-3.png' alt='logo'/>
                            </Link>
                        </div>
                        <div className='col-lg-8 ms-auto'>
                            <nav className='d-flex flex-row-reverse'>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/About">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/Portfolio">Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="Service" className="nav-link">Service</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Testimonial" className="nav-link">Testimonial</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="Contact" className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/*sidebar intro*/}
                </div>
            </div>
            <div className='sidebar-nav'>
                <div className='container g-0'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-lg-6 col-md-6 col-sm-9'>
                            <Link className="navbar-brand" href="/">
                                <img  src='/images/logo-3.png' alt='logo'/>
                            </Link>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-3'>
                            <div className='hidden nev-res'>
                                <button onClick={sidebarControl}  className=' text-[22px] rounded-full border border-[#ffffff] p-[10px]'>
                                    <HiBars3BottomRight className='text-[#ffffff]' />
                                </button>
                            </div>
                            <div className={sidebar ? "side-nav-open " : "side-nav-close"}>
                                <nav>
                                    <ul className='mt-3'>
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/About">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/Portfolio">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link href="/Service">Service</Link>
                                        </li>
                                        <li>
                                            <Link href="/Testimonial">Testimonial</Link>
                                        </li>
                                        <li>
                                            <Link href="/Contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppNavbar;