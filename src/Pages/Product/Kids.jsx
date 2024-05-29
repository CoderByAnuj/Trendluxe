import { kids } from "../../assets/Database/main.js";
import { useCart } from "../../context/CartContext.jsx";

export default function Kids() {
  const { addItem } = useCart();
  return (
    <>
      <div className="main h-fit bg-white  grid grid-cols-2 md:grid-cols-4  md:px-10 md:p-5 p-2 gap-2 md:gap-4 ">
        {kids.map((item, index) => (
          <>
            <div key={index} className="card w-32 md:w-60 bg-base-100 shadow-xl">
              <figure>
                <img src={item.imageURL} alt="Shoes" className=" inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </figure>
              <div className="card-body p-2">
                <h2 className="text-xs md:text-md font-bold leading-tight">{item.product}</h2>
                <p className="text-xs">Price : {item.price}</p>
                <p className="text-xs">Brand : {item.brand}</p>
                <p className="text-xs">Cetogory : {item.category}</p>
                <div className="card-actions justify-end">
                  <button onClick={() => addItem(item)} className=" bg-cyan-700 text-xs font-bold text-white rounded-lg px-2 py-2 ">Buy Now</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
