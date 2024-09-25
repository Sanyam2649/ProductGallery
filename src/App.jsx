import { CartProvider } from './Component/CartContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Route/Home";
import Cart from "./Route/Cart";
import Lamp from "./Component/Lamp";
import Sofa from "./Component/Sofa";
import Curtains from "./Component/Curtain";
import Mirror from "./Component/Mirror";
import DinningTable from "./Component/DinningTable";
import Carpet from "./Component/Carpet";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/lamp" element={<Lamp />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/curtains" element={<Curtains />} />
          <Route path="/mirror" element={<Mirror />} />
          <Route path="/dinningtable" element={<DinningTable />} />
          <Route path="/carpet" element={<Carpet />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

