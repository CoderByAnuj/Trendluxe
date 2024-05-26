import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import Mens from "./Pages/Product/Mens";
import Womens from "./Pages/Product/Womens";
import Kids from "./Pages/Product/Kids";
import AddProduct from "./Components/AddProduct";
import Cart from "./Pages/Product/Cart";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
