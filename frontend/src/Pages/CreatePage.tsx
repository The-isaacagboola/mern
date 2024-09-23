import React, { useEffect, useReducer, useState } from "react";
import SuccessfulPop from "../components/successful-pop";

type ProductType = {
  name: string;
  price: number;
  image: string;
};
type ProductAction = {
  type: "name" | "image" | "price";
  payload: string | number;
};

export default function CreatePage() {
  const [visible, setVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(true);

  const [newProduct, dispatchProduct] = useReducer(productReducer, {
    name: "",
    price: 0,
    image: "",
  });

  function productReducer(state: ProductType, action: ProductAction) {
    return { ...state, [action.type]: action.payload };
  }

  async function AddNewProduct(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const product = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      return await product.json();
    } catch (error) {
      console.error("Error Ocurred while Creating New Product", error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [visible]);

  return (
    <div className="relative w-full lg:min-w-[800px] max-w-[1200px]">
      <h1 className="mb-8 text-3xl font-semibold text-center font-inter">
        Create New Product
      </h1>
      <SuccessfulPop
        visible={visible}
        showSuccess={showSuccess}
        showFailure={showFailure}
      />

      <form className="flex flex-col rounded-lg gap-4 p-5 bg-[#dddddd14]">
        <input
          onChange={(e) => {
            dispatchProduct({
              type: "name",
              payload: e.target.value,
            });
          }}
          type="text"
          placeholder="Product Name"
        />

        <input
          onChange={(e) => {
            dispatchProduct({
              type: "price",
              payload: +e.target.value,
            });
          }}
          type="text"
          placeholder="Price"
        />

        <input
          onChange={(e) => {
            dispatchProduct({
              type: "image",
              payload: e.target.value,
            });
          }}
          type="url"
          placeholder="Image URL"
        />

        <button
          className="p-4 text-xl font-bold text-black font-inter bg-zinc-400"
          type="submit"
          onClick={AddNewProduct}
        >
          Add Product
        </button>
      </form>

      <button
        onClick={() => {
          setVisible((prev) => !prev);
        }}
      >
        {" "}
        Show Button
      </button>
    </div>
  );
}
// update the setSuccess and setFailure messages from the api response of the state of the request.

// edit and delete items in the home page

// implement the delete modal
