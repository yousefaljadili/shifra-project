// import Image from "next/image";

// export default function WhyCard({ image, title }) {
//   return (
//     <div className="flex flex-col items-center">
      
//       {/* Image */}
//       <div className="bg-gray-100 rounded-lg p-4">
//         <Image
//           src={image}
//           alt={title}
//           width={100}
//           height={100}
//         />
//       </div>

//       {/* Button */}
//       <button className="mt-3 bg-yellow-400 text-white px-4 py-1 rounded-full text-xs">
//         {title}
//       </button>

//     </div>
//   );
// }
import Image from "next/image";

export default function WhyCard({ image, title }) {
  return (
    <div className="flex flex-col items-center">
      
      {/* Image container ثابت */}
      <div className="bg-gray-100 rounded-lg w-[100px] h-[100px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Button */}
      <button className="mt-3 bg-yellow-400 text-white px-4 py-1 rounded-full text-xs">
        {title}
      </button>

    </div>
  );
}