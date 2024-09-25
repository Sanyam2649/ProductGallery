import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Component/CartContext';
import { IoHome } from 'react-icons/io5';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    paymentMode: 'Credit Card',
  });
  const [stock, setStock] = useState({
    // Example stock values, you can fetch these from an API or context
    1: 10, 
    2: 5,  
   
  });
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    const normalizedTerm = searchTerm.toLowerCase();

    // Define the pages you want to search
    const pages = {
      sofa: '/sofa',
      curtain: '/curtains',
      lamp: '/lamp',
      diningtable: '/dinningtable',
      mirror: '/mirror',
      carpet: '/carpet',
      // Add other page names here
    };

    if (pages[normalizedTerm]) {
      navigate(pages[normalizedTerm]);
    } else {
      alert('Page not found!');
    }
  };

  const handleOrderNow = () => {
    if (window.confirm('Do you want to confirm the order?')) {
      clearCart();
      setOrderDetails({
        name: '',
        address: '',
        paymentMode: 'Credit Card',
      });
      alert('Order placed successfully!');
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setStock((prevStock) => ({
      ...prevStock,
      [productId]: prevStock[productId] - newQuantity,
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-white shadow-md mb-4 p-4 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <IoHome className="text-green-500 text-2xl mr-2" />
            <span className="text-xl font-bold md:hidden-block">HomeStore</span>
          </div>
        </Link>
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded-l-lg"
          />
          <button type="submit" className="bg-orange-500 text-white p-2 rounded-r-lg">Search</button>
        </form>
      </header>

      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((product) => (
              <li key={product.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg mr-4"/>
                <div>
                  <h2 className="font-bold">{product.name}</h2>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Total: ${product.price * product.quantity}</p>
                  <input
                    type="number"
                    min="1"
                    max={stock[product.id]}
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                    className="w-16 p-1 border rounded"
                  />
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mt-4">Total: ${totalPrice}</h2>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Order Now</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={orderDetails.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={orderDetails.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Payment Mode</label>
                <select
                  name="paymentMode"
                  value={orderDetails.paymentMode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>
              <button
                type="button"
                onClick={handleOrderNow}
                className="bg-green-500 text-white p-2 rounded"
              >
                Order Now
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

