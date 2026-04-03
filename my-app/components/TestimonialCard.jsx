import Image from "next/image";

export default function TestimonialCard({ image, text }) {
  return (
    <div className="w-[174px] h-[274px] flex flex-col items-center text-center">
      
      {/* Image */}
      <Image
        src={image}
        alt="student"
        width={60}
        height={60}
        className="rounded-full"
      />

      {/* Text */}
      <p className="text-gray-500 text-sm mt-4 leading-5 line-clamp-6">
        {text}
      </p>

    </div>
  );
}