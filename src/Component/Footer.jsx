import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 text-orange-400 w-full py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 pl-4">
        <ul className="flex flex-row gap-4 font-semibold">
          <li className="hover:underline hover:font-bold cursor-pointer">About</li>
          <li className="cursor-pointer">FAQs</li>
          <li className="cursor-pointer">Policies</li>
          <li className="cursor-pointer">Terms & Conditions</li>
        </ul>
      </div>
      <div className="pt-3 text-center md:text-left">
        <p>All rights reserved to the company! &copy; 2003</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 pt-2">
        <p>Follow us:</p>
        <div className="flex gap-4">
          <FaInstagram className="w-8 h-8 hover:text-red-500 cursor-pointer" />
          <FaTwitter className="w-8 h-8 hover:text-blue-400 cursor-pointer" />
          <FaLinkedin className="w-8 h-8 hover:text-blue-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
