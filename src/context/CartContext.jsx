import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./firebase";

// Create the context
const CartContext = createContext();

const firebaseAuth = getAuth(app);
// Helper function to save cart to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCartFromLocalStorage);
  const [user, setUser] = useState(null);
  

  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  const googleAuthPrivider = new GoogleAuthProvider();

  // function to check if user is logged in or not

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  // Existing cart functions adapted to use state
  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // function to register user with email and password
  const Ragister = async (email, password) => {
    try {
      const msg = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
     alert("Ragistered Successfully");
      console.log(msg);
    } catch (error) {
      alert(error.message);
      console.log("ragister ", error);
    }
  };
  const Login = async (email, password) => {
    try {
      const msg = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      alert("Login Successfully");
      console.log(msg);
    } catch (error) {
      alert(error.message);
      console.log("Please Check Your Detail ", error.message);
    }
  };





  const isLoggedIn = user ? true : false;
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, user, Login, Ragister, isLoggedIn }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


export const AuthState = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};