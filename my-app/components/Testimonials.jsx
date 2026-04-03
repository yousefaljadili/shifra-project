import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const students = [
    {
      image: "/images/Pexels Photo by Andrea Piacquadio.png",
      text: "The lessons were clear and easy to follow. I was able to understand the topics much faster",
    },
    {
      image: "/images/default.png",
      text: "This platform made learning fun and simple. I truly noticed a big improvement in my skills",
    },
    {
      image: "/images/default.png",
      text: "I love the flexibility. I can revisit the courses anytime I need to refresh my knowledge.",
    },
    {
      image: "/images/Pexels Photo by Jc Laurio.png",
      text: "The experience completely changed how I view learning. I feel more confident now",
    },
    {
      image: "/images/Pexels Photo by Nicole Berro.png",
      text: "The content is well-structured and very practical. It feels like learning directly from an expert",
    },
  ];

  return (
    <section className="px-10 py-16 bg-[#f5f7fb] text-center">
      
      <h2 className="text-3xl font-bold text-[#0f2a44]">
        What Our Students Say
      </h2>

      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {students.map((item, index) => (
          <TestimonialCard
            key={index}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>

    </section>
  );
}