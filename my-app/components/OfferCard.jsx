export default function OfferCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-sm w-[236px] h-[162px] p-4 flex flex-col items-center justify-center text-center">
      
      {/* Icon */}
      <div className="mb-2 flex justify-center">
        <div className="bg-blue-100 p-2 rounded-full flex items-center justify-center">
          <Icon className="text-blue-600 w-5 h-5" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm text-[#0f2a44]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs mt-1 px-2">
        {description}
      </p>

    </div>
  );
}