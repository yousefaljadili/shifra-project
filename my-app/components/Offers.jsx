import OfferCard from "./OfferCard";
import { BookOpen, User, Clock, Award } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      icon: BookOpen,
      title: "Online Courses",
      description: "Learn anytime, anywhere online courses designed to build practical skills.",
    },
    {
      icon: User,
      title: "Expert Trainer",
      description: "Learn from the best trainers who understand the industry.",
    },
    {
      icon: Clock,
      title: "Life Time Access",
      description: "Once you enroll, the course is yours forever.",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn recognized certificates to boost your career.",
    },
  ];

  return (
    <section className="px-10 py-16 bg-[#f5f7fb] text-center">
      
      <h2 className="text-3xl font-bold text-[#0f2a44]">
        What We Offer
      </h2>

      <p className="text-gray-500 mt-2">
        For Your Future Learning.
      </p>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {offers.map((item, index) => (
          <OfferCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </section>
  );
}