import Image from "next/image";

export default function CourseCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-[260px]">
      
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={260}
        height={160}
        className="object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-[#0f2a44]">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          {description}
        </p>

        <button className="mt-4 bg-[#0f2a44] text-white px-4 py-2 rounded-full text-sm">
          View Course
        </button>
      </div>
    </div>
  );
}