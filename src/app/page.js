import AboutComponet from '@/components/AboutComponet';
import Contact from '@/components/Contact';
import HomeComponent from '@/components/HomeComponent';
import AppNavbar from '@/components/MasterLayout/AppNavbar';
import Footer from '@/components/MasterLayout/Footer';
import Portfolio from '@/components/Portfolio';
import Service from '@/components/Service';
import Testimonial from '@/components/Testimonial';
import React, { Suspense } from 'react';
import { PrismaClient } from "@prisma/client";
import PortfolioSkeleton from '@/skeleton/Portfolio-skeleton';
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
  let About = await prisma.about_page.findMany()
  let Skill = await prisma.skill.findMany({
    select: {
      id:true,
      title: true,
      percent:true
    }
  })
  let Education = await prisma.education.findMany()
  let Testimonial = await prisma.testimonial.findMany()
  let Contact_map = await prisma.contact_page.findMany({
    select: {
      id: true,
      contact_info_google_map:true,
    }
  })
  return {Hero,About,Skill,Education,Testimonial,Contact_map}
}
const page = async () => {
  const data=await getData()
  return (
    <div>
      <AppNavbar />
      <HomeComponent data={data['Hero']} />
      <AboutComponet data={data['Skill'] } Education={data['Education']} About={data['About']} />
      <Suspense fallback={<PortfolioSkeleton/>}>
          <Portfolio/>
      </Suspense>
      <Service/>
      <Testimonial data={data['Testimonial']} />
      <Contact data={data['Contact_map'] } />
      <Footer/>
    </div>
  );
};

export default page;