import AboutComponet from '@/components/AboutComponet';
import HomeComponent from '@/components/HomeComponent';
import AppNavbar from '@/components/MasterLayout/AppNavbar';
import Footer from '@/components/MasterLayout/Footer';
import React from 'react';
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
  let About = await prisma.about_page.findMany()
  let Skill = await prisma.skill.findMany({
    select: {
      id:true,
      title: true,
      percent:true
    }
  })
  let Education = await prisma.education.findMany()
  return {Hero,About,Skill,Education}
}
const page = async () => {
  const data=await getData()
  return (
    <div>
      <AppNavbar />
      <HomeComponent data={data['Hero']} />
      <AboutComponet data={data['Skill'] } Education={data['Education']} About={data['About']} />
      <Footer/>
    </div>
  );
};

export default page;