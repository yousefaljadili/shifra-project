"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Star, PlayCircle, CheckCircle } from 'lucide-react';

const SECTIONS_DATA = [
  {
    title: "Design Courses",
    courses: [
      { id: 1, title: "UI/UX Fundamentals", thumbnail: "/images/representations-user-experience-interface-design.png", tutorAvatar: "/images/Pexels Photo by Italo Melo.png", lessons: 12, students: 10, rating: 4, price: 55 },
      { id: 2, title: "Motion Graphic", thumbnail: "/images/image 2.png", tutorAvatar: "/images/Pexels Photo by ANTONI SHKRABA production.png", lessons: 30, students: 25, rating: 4, price: 29 },
      { id: 3, title: "Graphic Design", thumbnail: "/images/image 3.png", tutorAvatar: "/images/Pexels Photo by Nitin Khajotia.png", lessons: 25, students: 25, rating: 5, price: 100 },
      { id: 4, title: "Video Montage", thumbnail: "/images/image 4.png", tutorAvatar: "/images/Pexels Photo by khezez  _ خزاز.png", lessons: 12, students: 50, rating: 5, price: 20 },
    ]
  },
  {
    title: "Marketing",
    courses: [
      { id: 5, title: "Digital Marketing", thumbnail: "/images/image 5.png", tutorAvatar: "/images/Pexels Photo by Italo Melo.png", lessons: 10, students: 35, rating: 5, price: 70 },
      { id: 6, title: "Social Media Marketing", thumbnail: "/images/image 6.png", tutorAvatar: "/images/Pexels Photo by ANTONI SHKRABA production.png", lessons: 30, students: 15, rating: 4, price: 45 },
      { id: 7, title: "Content Marketing", thumbnail: "/images/image 7.png", tutorAvatar: "/images/Pexels Photo by Nitin Khajotia.png", lessons: 12, students: 25, rating: 4, price: 45 },
      { id: 8, title: "Google Ads & Analytics", thumbnail: "/images/image 8.png", tutorAvatar: "/images/Pexels Photo by khezez  _ خزاز.png", lessons: 18, students: 70, rating: 5, price: 35 },
    ]
  },
  {
    title: "Web Development",
    courses: [
      { id: 9, title: "React JS Masterclass", thumbnail: "/images/image 9.png", tutorAvatar: "/images/Pexels Photo by Italo Melo.png", lessons: 45, students: 120, rating: 5, price: 85 },
      { id: 10, title: "Next.js Fullstack", thumbnail: "/images/image 11.png",  tutorAvatar: "/images/Pexels Photo by ANTONI SHKRABA production.png", lessons: 38, students: 90, rating: 5, price: 95 },
      { id: 11, title: "Frontend Bootcamp", thumbnail: "/images/image 12.png",  tutorAvatar: "/images/Pexels Photo by Nitin Khajotia.png", lessons: 25, students: 150, rating: 4, price: 50 },
      { id: 12, title: "Backend with Node.js", thumbnail: "/images/image 14.png", tutorAvatar: "/images/Pexels Photo by khezez  _ خزاز.png", lessons: 30, students: 80, rating: 5, price: 75 },
    ]
  },
  {
    title: "Cyber Security",
    courses: [
      { id: 13, title: "Ethical Hacking 101", thumbnail: "/images/image 16.png",tutorAvatar: "/images/Pexels Photo by Italo Melo.png", lessons: 50, students: 40, rating: 5, price: 120 },
      { id: 14, title: "Network Security Pro", thumbnail: "/images/image 17.png",  tutorAvatar: "/images/Pexels Photo by ANTONI SHKRABA production.png", lessons: 28, students: 30, rating: 4, price: 80 },
      { id: 15, title: "Linux for Hackers", thumbnail: "/images/image 18.png",  tutorAvatar: "/images/Pexels Photo by Nitin Khajotia.png", lessons: 20, students: 55, rating: 5, price: 45 },
      { id: 16, title: "Cloud Security", thumbnail: "/images/image 19.png", tutorAvatar: "/images/Pexels Photo by khezez  _ خزاز.png", lessons: 35, students: 25, rating: 4, price: 110 },
    ]
  },
  {
    title: "Content Writing",
    courses: [
      { id: 17, title: "Copywriting Secrets", thumbnail: "/images/image 19.png", tutorAvatar: "/images/Pexels Photo by Italo Melo.png", lessons: 20, students: 100, rating: 5, price: 50 },
      { id: 18, title: "SEO Writing Guide", thumbnail: "/images/image 20.png",  tutorAvatar: "/images/Pexels Photo by ANTONI SHKRABA production.png", lessons: 14, students: 85, rating: 4, price: 30 },
      { id: 19, title: "Creative Writing", thumbnail: "/images/image 21.png",  tutorAvatar: "/images/Pexels Photo by Nitin Khajotia.png", lessons: 10, students: 40, rating: 5, price: 40 },
      { id: 20, title: "Blog Management", thumbnail: "/images/Mask group.png", tutorAvatar: "/images/Pexels Photo by khezez  _ خزاز.png", lessons: 12, students: 65, rating: 4, price: 25 },
    ]
  }
];

export default function CourseDetailPage() {
  const { id } = useParams();
  const allCourses = SECTIONS_DATA.flatMap(section => section.courses);
  const course = allCourses.find(c => String(c.id) === String(id));

  if (!course) return <div className="p-20 text-center font-bold text-[#001B4A]">Course not found.</div>;

  return (
    <div className="min-h-screen bg-[#F8FBFE] pb-20 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <h1 className="text-5xl font-black text-[#001B4A] mb-8 leading-tight">{course.title}</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Start your journey in {course.title}. Hands-on projects, cutting-edge tools, and expert advice from professional instructors.
            </p>
          </div>
          <div className="relative w-full h-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Instructor */}
            <section>
              <h2 className="text-3xl font-black text-[#001B4A] mb-8">Instructor</h2>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-blue-50 flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image src={course.tutorAvatar} alt={course.tutorName} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#001B4A]">{course.tutorName}</h3>
                  <p className="text-gray-400 text-sm font-bold uppercase">{course.tutorBio}</p>
                </div>
              </div>
            </section>

            {/* About */}
            <section>
              <h2 className="text-3xl font-black text-[#001B4A] mb-6">About this course</h2>
              <p className="text-gray-500 text-xl leading-relaxed">
                In this course, you will learn professional skills, conduct research, and build high-quality projects under the supervision of experts.
              </p>
            </section>

            {/* What you'll learn */}
            <section className="bg-white p-10 rounded-[2rem] border border-blue-50 shadow-sm relative overflow-hidden">
               <div className="absolute top-8 left-8 w-6 h-6 bg-[#2D5BFF] rounded-full" />
               <h2 className="text-3xl font-black text-[#001B4A] mb-8 pl-10">What you'll learn</h2>
               <ul className="space-y-4 ml-4">
                  {["Professional Core Skills", "Real-world Project Implementation", "Industry Standard Tools", "Expert Feedback & Guidance"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-bold text-lg">
                      <span className="w-2 h-2 bg-black rounded-full" /> {item}
                    </li>
                  ))}
               </ul>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-3xl font-black text-[#001B4A] mb-8">Curriculum</h2>
              <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                {[
                  { title: "1. Introduction & Overview", time: "15 min", label: "Preview" },
                  { title: "2. Core Concepts & Theory", time: "45 min", label: "3 lectures" },
                  { title: "3. Practical Application", time: "1.5 hr", label: "5 lectures" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-6 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-bold text-[#001B4A] mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase">{item.time}</p>
                    </div>
                    <span className="text-sm font-bold text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-3xl font-black text-[#001B4A] mb-8">Student Reviews</h2>
              <div className="space-y-4">
                {[
                  { name: "Saeed Ali", review: "Great course, highly recommended!", stars: 5, time: "6m ago" },
                  { name: "Aila Ahmed", review: "Very clear explanations and useful projects.", stars: 5, time: "20m ago" },
                ].map((rev, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl flex justify-between items-start border border-gray-50 shadow-sm">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-200" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-black text-[#001B4A]">{rev.name}</span>
                          <div className="flex text-yellow-400">
                             {[...Array(rev.stars)].map((_, s) => <Star key={s} size={12} fill="currentColor" />)}
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm">{rev.review}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-300 font-bold">{rev.time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Price Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-white p-8 rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-gray-50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-[#001B4A]">Course Price</h3>
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-2xl text-4xl font-black">{course.price}$</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-10 text-center border-y border-gray-50 py-6">
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase">Lessons</p>
                  <p className="font-black text-[#001B4A] text-lg">{course.lessons}</p>
                </div>
                <div className="border-x border-gray-100">
                  <p className="text-gray-400 text-[10px] font-bold uppercase">Duration</p>
                  <p className="font-black text-[#001B4A] text-lg">{course.duration}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase">Level</p>
                  <p className="font-black text-[#001B4A] text-lg">{course.level}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                {["Certificate", "Projects", "Lifetime Access"].map((tag) => (
                  <span key={tag} className="bg-gray-50 text-gray-400 px-3 py-2 rounded-full text-[10px] font-black border border-gray-100">{tag}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}