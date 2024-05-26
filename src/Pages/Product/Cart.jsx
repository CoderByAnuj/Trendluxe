import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();
 

  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-5 text-4xl">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="divide-y divide-gray-200">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center py-4">
                <div className='flex gap-4'>
                <img src={item.imageURL} className='w-24 rounded-lg' alt="" />
                  <h5 className="text-lg font-semibold">{item.product}</h5>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button 
                  className="text-red-500 hover:text-red-700" 
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <h4 className="text-xl font-bold">Subtotal: ${subtotal.toFixed(2)}</h4>
            <button 
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700" 
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
