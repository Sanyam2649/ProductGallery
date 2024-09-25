import Image1 from "../assets/review/user-2.png";
import Image2 from "../assets/Home Product/Carpet.png";
import Image3 from "../assets/Home Product/Carpet2.png";
import Image4 from "../assets/Home Product/Carpet3.png";
import Image5 from "../assets/Home Product/Carpet4.png";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const products = [
  {
    id: 1,
    name: 'Cozy Carpet',
    price: 80,
    image: Image2,
    description: 'Illuminate your space with this stylish carpet. Featuring a sleek, modern design, it is perfect for any room.',
    inStock: 10,
  },
  {
    id: 2,
    name: 'White Carpet with Black Shades',
    price: 90,
    image: Image3,
    description: 'A luxurious feel that enhances any room decor.',
    inStock: 5,
  },
  {
    id: 3,
    name: 'Brick Pattern Carpet',
    price: 100,
    image: Image4,
    description: 'Soft and durable, perfect for high-traffic areas.',
    inStock: 8,
  },
  {
    id: 4,
    name: 'Multicolour White Carpet',
    price: 110,
    image: Image5,
    description: 'Elegant design that adds sophistication to your space.',
    inStock: 3,
  },
];

const Carpet = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity when a new product is selected
  };

  const handleAddToCart = (product) => {
    if (quantity <= product.inStock) {
      product.inStock -= quantity;
      addToCart({ ...product, quantity });
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
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="rounded-lg shadow-md mb-4 w-full h-auto max-w-xs mx-auto" 
            />
            <div className="flex overflow-x-auto">
              {products.map((product) => (
                <div key={product.id} className="cursor-pointer mr-2" onClick={() => handleImageClick(product)}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-20 h-20 rounded-lg shadow-md" 
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{selectedProduct.name}</h1>
            <p className="text-xl text-red-500 mb-4">${selectedProduct.price}</p>
            <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
            <p className="text-gray-700 mb-6">{selectedProduct.inStock > 0 ? `In Stock: ${selectedProduct.inStock}` : 'Out of Stock'}</p>
            {selectedProduct.inStock > 0 && (
              <div>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                  max={selectedProduct.inStock}
                  className="border rounded px-2 py-1 mb-4"
                />
                <button 
                  className="bg-orange-500 text-white px-6 py-2 rounded-full" 
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex items-center mb-4">
            <img src={Image1} alt="Customer profile" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Rosie John</p>
              <p className="text-gray-700">Absolutely love this floor carpet! It fits perfectly in my living room. Highly recommend!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Carpet;