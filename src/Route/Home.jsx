import { useState } from 'react';
import { IoHome } from "react-icons/io5";
import Image1 from "../assets/Home Product/sofa.png";
import Image2 from "../assets/Home Product/Curtains.png";
import Image3 from "../assets/Home Product/Mirror.png";
import Image4 from "../assets/Home Product/Carpet.png";
import Image5 from "../assets/Home Product/DinningTable.png";
import Image6 from "../assets/Home Product/Lamp.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const normalizedTerm = searchTerm.toLowerCase();

    const pages = {
      sofa: '/sofa',
      curtains: '/curtains',
      mirror: '/mirror',
      carpet: '/carpet',
      diningtable: '/dinningtable',
      lamp: '/lamp',
    };

    if (pages[normalizedTerm]) {
      navigate(pages[normalizedTerm]);
    } else {
      alert('Page not found!');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col gap-4">
      <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-md w-full">
        <div className="flex items-center">
          <IoHome className="text-green-500 text-2xl" />
          <h1 className="text-xl font-bold ml-2 hidden md:block">HomeStore</h1>
        </div>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-l-full py-2 px-4 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white rounded-r-full py-2 px-4 hover:bg-orange-600 transition duration-200"
          >
            Search
          </button>
        </form>
        <Link to="/cart" className="ml-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200">
            Cart
          </button>
        </Link>
      </header>
      <main className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[ 
            { image: Image1, title: "Luxurious Sofa", description: "A plush and comfortable sofa perfect for your living room.", price: "$999", link: "/sofa" },
            { image: Image2, title: "Elegant Curtains", description: "Stylish and sophisticated curtains to enhance your home decor.", price: "$120", link: "/curtains" },
            { image: Image3, title: "Vintage Mirror", description: "An exquisite vintage mirror to add a touch of elegance to your home.", price: "$250", link: "/mirror" },
            { image: Image4, title: "Cozy Carpet", description: "A soft and warm carpet to add comfort to your home.", price: "$80", link: "/carpet" },
            { image: Image5, title: "Dining Table Set", description: "A stylish dining table set perfect for family meals.", price: "$600", link: "/dinningtable" },
            { image: Image6, title: "Modern Floor Lamp", description: "A sleek and modern floor lamp to brighten up your space.", price: "$150", link: "/lamp" }
          ].map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-t-lg mb-4 w-fit h-40 object-cover"
                />
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-xl font-bold mt-2">{product.price}</p>
              </div>
              <Link to={product.link} className="mt-auto">
                <button className="bg-orange-500 text-white py-2 px-4 rounded max-w-full hover:bg-orange-600 transition duration-200">
                  Check More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
