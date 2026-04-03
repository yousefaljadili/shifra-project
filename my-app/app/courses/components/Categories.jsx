const Categories = ({ selectedCategory, setSelectedCategory }) => {
  // داخل ملف Categories.js
const categories = [
  "Design Courses", 
  "Marketing",        // تأكد من الحرف الكبير M
  "Web Development", 
  "Cyber Security", 
  "Content Writing"   // تأكد من الحرف الكبير C و W
];

  return (
    <div className="w-full py-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 
          className={`text-[#001B4A] font-bold text-lg mb-8 cursor-pointer hover:text-blue-600 transition-all ${!selectedCategory ? 'underline scale-110' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          All categories
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedCategory(cat)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div 
                className={`w-4 h-4 rounded-sm transition-colors ${selectedCategory === cat ? 'bg-blue-600' : 'bg-[#D9D9D9]'}`}
              />
              <span className={`text-[#001B4A] text-sm md:text-base font-medium transition-colors ${selectedCategory === cat ? 'text-blue-600 font-bold' : ''}`}>
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;