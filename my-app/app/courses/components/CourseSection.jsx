import React from 'react';
import Image from 'next/image';
import { BookOpenText, Users, Star } from 'lucide-react';
import Link from 'next/link';
// 1. يجب أن تكون المصفوفة هنا (خارج المكون وفي الأعلى) لتكون مرئية للدالة بالأسفل
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
      { id: 9, title: "React.js Essentials", thumbnail: "/images/image 9.png", tutorAvatar: "/images/Pexels Photo by Italo Melo.png", lessons: 45, students: 120, rating: 5, price: 85 },
      { id: 10, title: "Full-Stack Development", thumbnail: "/images/image 11.png",  tutorAvatar: "/images/Pexels Photo by ANTONI SHKRABA production.png", lessons: 38, students: 90, rating: 5, price: 95 },
      { id: 11, title: "Database Management", thumbnail: "/images/image 12.png",  tutorAvatar: "/images/Pexels Photo by Nitin Khajotia.png", lessons: 25, students: 150, rating: 4, price: 50 },
      { id: 12, title: "Front-End Development", thumbnail: "/images/image 14.png", tutorAvatar: "/images/Pexels Photo by khezez  _ خزاز.png", lessons: 30, students: 80, rating: 5, price: 75 },
    ]
  },
  {
    title: "Cyber Security",
    courses: [
      { id: 13, title: "Ethical Hacking", thumbnail: "/images/image 16.png",tutorAvatar: "/images/Pexels Photo by Italo Melo.png", lessons: 50, students: 40, rating: 5, price: 120 },
      { id: 14, title: "Network Security ", thumbnail: "/images/image 17.png",  tutorAvatar: "/images/Pexels Photo by ANTONI SHKRABA production.png", lessons: 28, students: 30, rating: 4, price: 80 },
      { id: 15, title: "Cyber Security for Web", thumbnail: "/images/image 18.png",  tutorAvatar: "/images/Pexels Photo by Nitin Khajotia.png", lessons: 20, students: 55, rating: 5, price: 45 },
      { id: 16, title: "Cyber Security Basic", thumbnail: "/images/image 19.png", tutorAvatar: "/images/Pexels Photo by khezez  _ خزاز.png", lessons: 35, students: 25, rating: 4, price: 110 },
    ]
  },
  {
    title: "Content Writing",
    courses: [
      { id: 17, title: "Content Writing Basic", thumbnail: "/images/image 19.png", tutorAvatar: "/images/Pexels Photo by Italo Melo.png", lessons: 20, students: 100, rating: 5, price: 50 },
      { id: 18, title: "SEO Writing ", thumbnail: "/images/image 20.png",  tutorAvatar: "/images/Pexels Photo by ANTONI SHKRABA production.png", lessons: 14, students: 85, rating: 4, price: 30 },
      { id: 19, title: "Blog & Article Writing ", thumbnail: "/images/image 21.png",  tutorAvatar: "/images/Pexels Photo by Nitin Khajotia.png", lessons: 10, students: 40, rating: 5, price: 40 },
      { id: 20, title: "Copywriting Secrets", thumbnail: "/images/Mask group.png", tutorAvatar: "/images/Pexels Photo by khezez  _ خزاز.png", lessons: 12, students: 65, rating: 4, price: 25 },
    ]
  }
];
// مكون الكرت (CourseCard)
const CourseCard = ({ course }) => (
  <Link href={`/courses/${course.id}`}>
  <div className="w-[300px] h-[300px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden group">
    <div className="relative h-[150px] w-full overflow-hidden">
      <Image src={course.thumbnail} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-3 relative flex flex-col flex-grow justify-between">
      <div className="absolute -top-5 left-3 w-10 h-10 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
        <Image src={course.tutorAvatar} alt="Tutor" width={40} height={40} />
      </div>
      <h3 className="text-[#001B4A] font-semibold text-[15px] mb-2 mt-5 line-clamp-2">{course.title}</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-gray-500 text-[11px] border-b pb-2">
          <div className="flex items-center gap-1"><BookOpenText size={14} /> <span>{course.lessons} lessons</span></div>
          <div className="flex items-center gap-1"><Users size={14} /> <span>{course.students} students</span></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex text-[#FFD700]"><Star size={12} fill="currentColor" /></div>
          <div className="text-[#D32F2F] font-bold text-lg">${course.price}</div>
        </div>
      </div>
    </div>
  </div>
  </Link>
);

// 2. المكون الرئيسي (استقبال البروب والفلترة)
export default function CourseSection({ activeFilter }) {
  
  // الفلترة المنطقية: عرض القسم المختار فقط أو عرض الكل
  const displayData = activeFilter 
    ? SECTIONS_DATA.filter(section => section.title === activeFilter)
    : SECTIONS_DATA;

  return (
    <div className="w-full bg-[#f8fbfe] py-20 px-4">
      <div className="max-w-[1320px] mx-auto space-y-24">
        {displayData.map((section) => (
          <section key={section.title} className="w-full animate-fadeIn">
<h3 className="text-[#001B4A] font-semibold text-[15px] mb-2 mt-5 line-clamp-2 tracking-[-0.011em]">              {section.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6 justify-items-center">
              {section.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}