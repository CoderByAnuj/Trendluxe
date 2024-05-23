import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import Mens from "./Pages/Product/Mens";
import Womens from "./Pages/Product/Womens";
import Kids from "./Pages/Product/Kids";

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
        </Routes>
      </div>
    </>
  );
}

export default App;
