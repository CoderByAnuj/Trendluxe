import { useState } from 'react';
import { mens } from "../../assets/Database/main.js";
import { useCart } from "../../context/CartContext.jsx";


export default function Mens() {
  const { addItem } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="main h-fit bg-white grid grid-cols-2 md:grid-cols-4 md:px-10 md:p-5 p-2 gap-2 md:gap-4">
        {mens.map((item, index) => (
          <div key={index} className="card w-32 md:w-60 bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.imageURL}
                alt="Shoes"
                className="inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="text-xs md:text-md font-bold leading-tight">
                {item.product}
              </h2>
              <p className="text-xs">Price : ₹{item.price}</p>
              <p className="text-xs">Brand : {item.brand}</p>
              <p className="text-xs">Category : {item.category}</p>
              <div className="card-actions justify-end">
                <button
                  className="py-1 px-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => setSelectedItem(item)}
                >
                  View
                </button>
                <button
                  onClick={() => addItem(item)}
                  className="bg-cyan-700 text-xs font-bold text-white rounded-lg px-2 py-2"
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </>
  );
}

const Modal = ({ item, onClose }) => {
  return (
    <dialog open id="my_modal_4" className="modal ">
      <div className="modal-box w-11/12 max-w-5xl  h-fit">
        <div className="modal-action ">
          <div className="Product w-full flex gap-x-4 ">
            <img src={item.imageURL} alt={item.product} className="w-80" />
            <div className="dat">
              <h3 className="font-bold text-2xl ">{item.product}</h3>
              <h3 className="py-2 text-xl font-semibold">
                Price : ₹{item.price}
              </h3>
              <div className="flex py-5 gap-x-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <div key={size} className="bg-gray-300 px-2 py-1 hover:bg-slate-400  rounded-sm">
                    {size}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-lg py-1 font-semibold">Brand : {item.brand}</p>
                <p className="text-lg   font-semibold">Category : {item.category}</p>
              </div>
            <div className='py-4'>
              <button className='bg-gray-200 font-bold  text-black  w-fit px-4 py-2 text-center  rounded-md hover:bg-black hover:text-white transition border-white border'>
              Add to Cart
              </button>
            </div>
            <div>
              <div className="description">
              {item.details}
              </div>
            </div>
            </div>
          </div>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn font-bold" onClick={onClose}>X</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};


