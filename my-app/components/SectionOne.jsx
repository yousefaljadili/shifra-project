import Image from "next/image";
import { Search } from 'lucide-react';
export default function sectionOne() {
  return (
    <section className="bg-[#b0bfc9] px-10 py-16 flex items-center justify-between">
      
      {/* Left side */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-[#0f2a44] leading-snug">
          Learn, Grow Your Skills, <br />
          and Start Your Journey <br />
          with <span className="text-yellow-500">Shifra</span>
        </h1>

        <p className="text-gray-600 mt-4">
          Discover high-quality training courses in Technology, Design,
          Business, and Languages – guided by expert instructors and
          certified programs that boost your career.
        </p>

        {/* Button */}
        <button className="mt-6 bg-[#0f2a44] text-white px-6 py-3 rounded-full flex items-center gap-2">
          Explore Courses Now
          <Search 
       
      size={24} 
      strokeWidth={2} 
    />
        </button>
      </div>

      {/* Right side (Image) */}
      <div>
        <Image
          src="/images/one.png"
          alt="hero"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

    </section>
  );
}