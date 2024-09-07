export const revalidate = 0;
import HomeComponent from '@/components/HomeComponent';
import AppNavbar from '@/components/MasterLayout/AppNavbar';
import Footer from '@/components/MasterLayout/Footer';
import Testimonial from '@/components/Testimonial';
import React, { Suspense } from 'react';
import { PrismaClient } from "@prisma/client";
async function getData() {
  const prisma = new PrismaClient();
  let Hero = await prisma.home_page.findMany({
    select: {
      id: true,
      top_section_subTitleColor:true,
      top_section_subTitle:true,
      top_section_heading_title_1:true,
      top_section_heading_title_2:true,
      top_section_heading_title_3:true,
      top_section_description:true,
      top_section_button_cover_text:true,
      top_section_button_cover_link:true,
      profile_img:true
    }
  })
  let Testimonial = await prisma.testimonial.findMany()
  return {Hero,Testimonial}
}
const page = async () => {
  const data=await getData()
  return (
    <div>
      <AppNavbar />
      <HomeComponent data={data['Hero']} />
      <Testimonial data={data['Testimonial']} />
      <Footer/>
    </div>
  );
};

export default page;