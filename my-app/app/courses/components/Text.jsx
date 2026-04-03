import React from 'react';
import { Search } from 'lucide-react';
export default function Text() {
    return (
   <section className="relative w-full py-20 px-6 md:py-32 bg-[#f8fbfe] overflow-hidden">
      {/* الدوائر الخلفية (Decorative Elements) */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-blue-100 rounded-full opacity-50" />
      <div className="absolute top-1/2 right-[-20px] w-12 h-12 bg-blue-500 rounded-full" />
      
      <div className="max-w-5xl mx-auto text-center">
        {/* العنوان الرئيسي بالمواصفات المطلوبة */}
        <h1 className="
          font-['Poppins'] 
          font-medium 
          text-3xl 
          md:text-[48px] 
          leading-[120%] 
          tracking-[-0.011em] 
          text-[#0a1d44] 
          mb-10
        ">
          Learn from top experts and take your skills to the <br className="hidden md:block" />
          next level with our featured courses across <br className="hidden md:block" />
          design, marketing, cybersecurity, web <br className="hidden md:block" />
          development, and more!
        </h1>

        {/* زر البحث */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 bg-[#051937] text-white px-8 py-3 rounded-full hover:bg-[#0a264d] transition-all shadow-lg">
            <span className="text-sm font-medium tracking-wide">Search Courses</span>
            <Search size={18} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};


