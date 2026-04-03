import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
     <div className="w-full">
  <Image
    src="/images/WhatsApp Image 2026-04-02 at 1.07.58 PM.jpeg"
    alt="about"
    width={1920}
    height={600}
    className="w-full h-auto"
  />
</div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto text-center py-12 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
        <p className="text-gray-700 leading-7">
          We are an innovative learning platform that aims to empower students
          and professionals to acquire the most in-demand digital skills. Our
          mission is to provide practical and flexible education that helps you
          develop yourself and achieve your career goals, with a vision to
          become the premier destination for digital learning in the Arab
          world.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-blue-900 font-semibold text-lg mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Provide practical, flexible, and quality education that helps
              learners grow and achieve their goals.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-blue-900 font-semibold text-lg mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become the leading digital learning hub in the Arab world
              inspiring lifelong learning.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center py-10 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Team</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center"
            >
              <div className="w-20 h-20 relative mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="text-blue-900 font-semibold">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-xs text-gray-400 mt-1">
                {member.exp}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-gray-500">Students</p>
            <h3 className="text-blue-900 text-xl font-bold">+250</h3>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-gray-500">Courses</p>
            <h3 className="text-blue-900 text-xl font-bold">+100</h3>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-gray-500">Instructors</p>
            <h3 className="text-blue-900 text-xl font-bold">+15</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "Ahmed Khalil",
    role: "Senior Product Designer",
    exp: "+7 years experience",
    image: "/images/Pexels Photo by Italo Melo.png",
  },
  {
    name: "Sara Ali",
    role: "Head of Marketing",
    exp: "+5 years experience",
    image: "/images/Pexels Photo by ANTONI SHKRABA production.png",
  },
  {
    name: "Mohamed Khalid",
    role: "Lead Developer",
    exp: "+7 years experience",
    image: "/images/Pexels Photo by Nitin Khajotia.png",
  },
  {
    name: "Aya eyad",
    role: "UI/UX Designer",
    exp: "+3 years experience",
    image: "/images/Pexels Photo by khezez  _ خزاز.png",
  },
];
