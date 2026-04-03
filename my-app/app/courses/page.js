"use client"; 
import SessionOne from "./components/SessionOne";
import Text from "./components/Text";
import Categories from '@/app/courses/components/Categories'
import CourseSection from '@/app/courses/components/CourseSection'
import React, { useState } from 'react';
export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="">
<SessionOne/>  
<Text/>
<Categories 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

      {/* نمرر التصنيف المختار للسكشن ليقوم بالفلترة */}
      <CourseSection activeFilter={selectedCategory} />
  </div>
  );
}