import Image1 from "../assets/review/user-3.png";
import Image2 from "../assets/Home Product/Curtains.png";
import Image3 from "../assets/Home Product/Curtains2.png";
import Image4 from "../assets/Home Product/Curtains3.png";
import Image5 from "../assets/Home Product/Curtains4.png";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const products = [
  {
    id: 1,
    name: 'Elegant Curtain',
    price: 120,
    image: Image2,
    description: 'A beautiful curtain that adds elegance to any room.',
    stock: 10,
  },
  {
    id: 2,
    name: 'White Curtain',
    price: 100,
    image: Image3,
    description: 'Light and airy, perfect for brightening your space.',
    stock: 8,
  },
  {
    id: 3,
    name: 'Royal Curtains',
    price: 150,
    image: Image4,
    description: 'A versatile curtain that fits any decor style.',
    stock: 5,
  },
  {
    id: 4,
    name: 'Curtain with a Different Shade',
    price: 130,
    image: Image5,
    description: 'Rich in color and texture, perfect for accentuating your room.',
    stock: 7,
  },
];

const Curtains = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity when a new product is selected
  };

  const handleAddToCart = (product) => {
    if (quantity <= product.stock) {
      addToCart({ ...product, quantity });
      product.stock -= quantity;
      navigate('/cart'); // Redirect to the cart page
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <IoHome className="text-green-500 text-2xl mr-2" />
              <span className="text-xl font-bold md:hidden-block">HomeStore</span>
            </div>
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="rounded-lg shadow-md mb-4 w-full h-auto max-w-xs mx-auto" 
            />
            <div className="flex space-x-2 overflow-x-auto">
              {products.map((product) => (
                <div key={product.id} className="cursor-pointer" onClick={() => handleImageClick(product)}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-20 h-20 rounded-lg shadow-md" 
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{selectedProduct.name}</h1>
            <p className="text-xl text-red-500 mb-4">${selectedProduct.price}</p>
            <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
            <p className="text-gray-700 mb-6">{selectedProduct.stock > 0 ? `In Stock: ${selectedProduct.stock}` : 'Out of Stock'}</p>
            {selectedProduct.stock > 0 && (
              <>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                  max={selectedProduct.stock}
                  className="mb-4 p-2 border rounded"
                />
                <button 
                  className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200" 
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex items-center mb-4">
            <img src={Image1} alt="Customer profile" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Marry Rose</p>
              <p className="text-gray-700">Absolutely love these room curtains! They look perfect in my living room and are very light and beautiful. Highly recommend!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Curtains;
