import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Empty from "./empty";
import EditProductModal from "./EditProductModal";

export type DetailsType = {
  _id: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
type ProductProps = {
  details: DetailsType;
};

//max-h-[32rem] max-w-[30rem]
function Product({ details }: ProductProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="grid grid-rows-[261px_150px] text-left overflow-hidden capitalize rounded-lg bg-[#6daab670] dark:bg-light hover:scale-[102%] transition-all duration-300 cursor-pointer">
      <img
        className="object-cover w-full h-full"
        src={details.image}
        alt="item image"
      />

      <div className="mb-3 ml-3">
        <div className="mt-5 ">
          <p className="mb-2 text-xl">{details.name}</p>
          <p className="text-xl">${details.price.toLocaleString()}</p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <div
            className="p-2 bg-gray-200 dark:bg-gray-200 rounded-md cursor-pointer text-[#000000a9] hover:text-black"
            onClick={() => {
              setOpenModal((prev) => !prev);
              console.log(openModal);
            }}
          >
            <FiEdit size={25} />
          </div>

          <div className="p-2 bg-red-200 dark:bg-red-200 rounded-md cursor-pointer text-[#8b8a8a8f] hover:text-[#ea2c2cf0]">
            <MdDelete size={26} />
          </div>

          {/* Edit Modal  */}

          <EditProductModal
            openModal={openModal}
            productDetails={details}
            setOpenModal={setOpenModal}
            _id={details._id}
          />
        </div>
      </div>
    </div>
  );
}

export default function CurrentProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchAllProducts() {
    setIsLoading(true);
    try {
      const products = await fetch("/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await products.json();
      setProducts(json.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(`Error fetching All Datas: ${error}`);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log(products);

  if (isLoading) {
    return (
      <div>
        <h1>Loading, Please Wait...</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-center justify-center gap-4 text-black mb-7 dark:text-white">
        <h2 className="text-4xl">Current Products</h2>
        <BsFillRocketTakeoffFill size={30} />
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-3 gap-8">
          {products.map((item, i) => (
            <Product key={i} details={item} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
