import CourseCard from "./CourseCard";

export default function FeaturedCourses() {

  const courses = [
    {
      title: "UI_UX",
      description: "Design modern, user friendly interfaces that create smooth digital experiences.",
      image: "/images/representations-user-experience-interface-design.png",
    },
    {
      title: "Digital Marketing",
      description: "Learn smart online strategies to grow brands and connect with audiences.",
      image: "/images/5045186_2648758 1.png",
    },
    {
      title: "Web Development",
      description: "Build responsive and dynamic websites using the latest web technologies.",
      image: "/images/10780522_19199494.png",
    },
    {
      title: "Cyber security",
      description: "Protect data and systems with practical skills against real cyber threats.",
      image: "/images/2463138_335741-PA8EPM-357.png",
    },
  ];

  return (
    <section className="px-10 py-16 bg-[#f5f7fb]">
      
      <h2 className="text-3xl font-bold text-center text-[#0f2a44]">
        Our Featured Courses
      </h2>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>

    </section>
  );
}