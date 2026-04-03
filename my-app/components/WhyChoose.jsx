import WhyCard from "./WhyCard";

export default function WhyChoose() {
  const items = [
    {
      image: "/images/Group 18.png",
      title: "Expert Instructors",
    },
    {
      image: "/images/recording-9540_256 1.png",
      title: "Interactive Content",
    },
    {
      image: "/images/Customer Service.png",
      title: "Fast technical support",
    },
  ];

  return (
    <section className="px-10 py-16 bg-[#f5f7fb] text-center">
      
      <h2 className="text-3xl font-bold text-[#0f2a44]">
        Why Choose Shifra?
      </h2>

      <div className="flex justify-center gap-16 mt-10">
        {items.map((item, index) => (
          <WhyCard
            key={index}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>

    </section>
  );
}