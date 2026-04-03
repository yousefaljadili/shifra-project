import Image from "next/image";
import SectionOne from '@/components/SectionOne'
import Offers from "@/components/Offers"; 
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <main className="">
       <SectionOne/>
       <Offers/>
       <FeaturedCourses/>
       <WhyChoose/>
       <Testimonials/>
      </main>
    </div>
  );
}
