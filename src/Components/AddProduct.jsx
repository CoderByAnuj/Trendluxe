import { useState } from "react";
import { AddProducts, SaveLocal} from "../assets/Database/main"
export default function AddProduct() {
  const [product, setProduct] = useState({
    imageURL: "",
    brand: "",
    product: "",
    gender: "",
    category: "",
    price: 0,
    strikedOffPrice: 0,
  });

  const handelChange = (e) => {
    let products = product;
    products[e.target.name] = e.target.value;
    setProduct({ ...products });
  };

  function AddProduct(){
   try {
    AddProducts(
      product.imageURL, product.brand, product.product, product.gender, product.category, product.price, product.strikedOffPrice
    )
   } catch (error) {
    console.log(error, "here")
   }
   SaveLocal()
   alert("add Product Succusfull ....")
  }

  return (
    <>
      <div className="form ">
        <div className=" flex  flex-col justify-center border pt-4">
          <label htmlFor="imageURL">
            Add Url
            <input
              type="text"
              className="border"
              name="imageURL"
              onChange={handelChange}
              value={product.imageURL}
            />
          </label>
          <label htmlFor="brand">
            Add Brand
            <input
              type="text"
              name="brand"
              onChange={handelChange}
              value={product.brand}
            />
          </label>
          <label htmlFor="product">
            Add Product
            <input
              type="text"
              name="product"
              onChange={handelChange}
              value={product.product}
            />
          </label>
          <label htmlFor="gender">
            Gender
            <input
              type="text"
              name="gender"
              onChange={handelChange}
              value={product.gender}
            />
          </label>
          <label htmlFor="category">
            Cetorgry
            <input
              type="text"
              name="category"
              onChange={handelChange}
              value={product.category}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="text"
              name="price"
              onChange={handelChange}
              value={product.price}
            />
          </label>
          <label htmlFor="strikedOffPrice">
            Strice Price
            <input
              type="text"
              name="strikedOffPrice"
              onChange={handelChange}
              value={product.strikedOffPrice}
            />
          </label>
          <button
            onClick={AddProduct}
            className="bg-white font-bold  text-black  w-fit px-4 py-2 text-center  rounded-md hover:bg-black hover:text-white transition border-white border"
          >
            submt
          </button>

          <div>{JSON.stringify(product)}</div>
        </div>
      </div>
    </>
  );
}
