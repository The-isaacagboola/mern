import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Empty from "./empty";

type ProductProps = {
  details: {
    _id: string;
    name: string;
    price: number;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

//max-h-[32rem] max-w-[30rem]
function Product({ details }: ProductProps) {
  return (
    <div className="grid grid-rows-[261px_140px] text-left overflow-hidden capitalize rounded-lg bg-light">
      <img
        className="object-cover h-full w-full"
        src={details.image}
        alt="item image"
      />

      <div className="ml-3 mb-3">
        <div className="mt-5 ">
          <p className="text-xl mb-2">{details.name}</p>
          <p className="text-xl">${details.price.toFixed(2)}</p>
        </div>

        <div className="flex gap-3 mt-2 items-center">
          <FiEdit className="cursor-pointer" size={25} />
          <MdDelete className="cursor-pointer" size={25} />
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
      const products = await fetch("http://localhost:3000/api/products", {
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
      <div className="flex gap-4 items-center justify-center mb-7">
        <h2 className="text-4xl">Current Products</h2>
        <BsFillRocketTakeoffFill color={"white"} size={30} />
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
