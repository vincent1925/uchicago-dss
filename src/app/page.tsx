import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import People from "@/components/People/people";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UChicago Data Science Society",
  description: "This is the website for UChicago DSS",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <div className="background-wrapper">
        <Hero />
        <AboutSectionOne />
      </div>
      <AboutSectionTwo />
      <People />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
