"use client"; 
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import LoaderButton from '@/components/MasterLayout/LoaderButton';
import { ErrorToast, IsEmpty, SuccessToast,IsEmail } from "@/utility/FormHelper";
const Contact = (props) => {
    const router=useRouter();
    const [submit, setSubmit] = useState(false);
     let [data, setData] = useState({
         name: "",email:"",website:"",long_des:""
         
     });
    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = async (e) => { 
        e.preventDefault();
        if(IsEmpty(data.name)){
            ErrorToast("Name is Required")
        }
        else if (IsEmail(data.email)) {
            ErrorToast("Invalite Email")
        }
        else if (IsEmpty(data.website)) {
            ErrorToast("Website link Required")
        }
        else if (IsEmpty(data.long_des)) {
            ErrorToast("Massage is Required")
        }
        else{
            setSubmit(true);
  
            const options = {
                method:'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
            let res=await fetch("/api/dashboard/contact_page",options);
            let ResJson=await res.json();
            setSubmit(false);
            if (ResJson['status'] === "success") {
                setData({...data, name: "",email:"",website:"",long_des:""}) 
                router.refresh()
                SuccessToast("Massage Success")
            }
            else {
                  ErrorToast("Request Fail")
            }
  
        }
    }

    return (
        <section id="contact" className='contact py-[70px] bg-[#ECF0F3]'>
            <div className='container'>
                {/* {JSON.stringify(props.data[0].contact_info_google_map)} */}
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='text-center title'>
                            <h2 className='text-black text-[50px] font-black uppercase'>get in <span className='text-[#50d71e]'>touch</span></h2>
                            <div className='divider'></div>
                            <p className="text-black uppercase relative">I’m always open to discussing websites design & Development work very time</p>
                        </div>
                    </div>
                </div>
                <div className='row pt-[50px]'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='bg-white rounded-xl p-[30px]'>
                            <h3 className='text-black text-[32px] font-semibold mb-[30px]'>Let's Work Together!</h3>
                             <form>
                                <input value={data.name} onChange={(e) => { inputOnChange("name", e.target.value) }} className='form-control bg-transparent text-black placeholder:text-black py-[12px]' type="text" id="fname" name="fname" placeholder='Enter Your Name' />
                                <input value={data.email} onChange={(e) => { inputOnChange("email", e.target.value) }} className='form-control bg-transparent text-black placeholder:text-black mt-[30px] py-[12px]' type="text" id="fname" name="fname" placeholder='Enter Your Email' />
                                <input value={data.website} onChange={(e) => { inputOnChange("website", e.target.value) }} className='form-control bg-transparent text-black placeholder:text-black mt-[30px] py-[12px]' type="text" id="fname" name="fname" placeholder='Website Link:' />
                                <textarea value={data.long_des} onChange={(e) => { inputOnChange("long_des", e.target.value) }} className='form-control bg-transparent text-black placeholder:text-black mt-[30px]'
                                name="message"
                                rows="6"
                                cols="50"
                                placeholder="Enter Your Massage"
                                />
                                <button className='all-btn mt-4' onClick={formSubmit}>{submit? <LoaderButton/>:"Send Massage"}</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className="rounded-xl bg-white p-[30px]">
                            <div className="contact-map">
                                <iframe
                                    src={props.data[0].contact_info_google_map}
                                    height={535}
                                    width={"100%"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;