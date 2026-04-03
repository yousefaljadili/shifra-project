import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" pb-10">
      
      <div className="bg-[#0b2a4a] text-white rounded-2xl py-16 text-center">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold">
          Ready to start your learning journey?
        </h2>

        {/* Button */}
        <button className="mt-6 bg-white text-[#0b2a4a] px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
          Register Now
        </button>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          
          <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#0b2a4a] transition">
            <FaFacebookF className="w-4 h-4" />
          </div>

          <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#0b2a4a] transition">
            <FaLinkedinIn className="w-4 h-4" />
          </div>

          <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#0b2a4a] transition">
            <FaInstagram className="w-4 h-4" />
          </div>

        </div>

        {/* Links */}
        <p className="text-sm text-gray-300 mt-6">
          Privacy Policy | Terms & Conditions
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-2">
          © 2025 Shifra Training Center – All Rights Reserved
        </p>

      </div>

    </footer>
  );
}