import ReactDOM from "react-dom";
import { DetailsType } from "./products";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import SuccessfulPop from "./successful-pop";

type ModalProps = {
  openModal: boolean;
  productDetails: DetailsType;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
};
export default function EditProductModal({
  openModal,
  productDetails,
  setOpenModal,
  _id,
}: ModalProps) {
  const [updatedDetails, setUpdatedDetails] = useState(productDetails);
  const [success, setSuccess] = useState(false);

  async function UpdateProduct() {
    try {
      const res = await fetch(`/api/products/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDetails),
      });
      const json = await res.json();
      console.log(json);
      if (!json.success) {
        setSuccess(true);
        setOpenModal(false);
        console.error("Error updating product");
      } else {
        return json;
      }
    } catch (error) {
      console.error("Product Update Failed, Please try Again", error.message);
    }
  }

  if (!openModal) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content rounded-lg text-white bg-gray-500/90 min-w-[600px]">
        <div className="flex items-center justify-between w-full mb-5">
          <h1 className="text-2xl font-bold font-inter">Update Product</h1>
          <IoClose
            cursor={"pointer"}
            size={30}
            onClick={() => setOpenModal(false)}
          />
        </div>

        <div className="flex flex-col gap-4 text-xl">
          <input
            name="name"
            value={updatedDetails.name}
            onChange={(e) => {
              setUpdatedDetails((prev) => ({ ...prev, name: e.target.value }));
            }}
            type="text"
          />

          <input
            name="price"
            value={updatedDetails.price}
            onChange={(e) => {
              setUpdatedDetails((prev) => ({
                ...prev,
                price: +e.target.value,
              }));
            }}
            type="text"
          />

          <input
            name="image"
            value={updatedDetails.image}
            onChange={(e) => {
              setUpdatedDetails((prev) => ({ ...prev, image: e.target.value }));
            }}
            type="text"
          />
        </div>

        {success ? (
          <SuccessfulPop
            visible={true}
            showSuccess={true}
            title={"Product Updated Successfully"}
          />
        ) : null}
        <div className="flex justify-end w-full mt-5">
          <button className="mr-3 update-btns" onClick={UpdateProduct}>
            Update
          </button>
          <button className="update-btns" onClick={() => setOpenModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
