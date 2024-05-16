import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const TopSales = ({ bg = false }) => {
  let Products = [
    {
      id: 1,
      image: "/images/product.webp",
      name: "Meat with salad",
      price: "30.00",
      discounts: "25.00",
      new: true,
    },
    {
      id: 2,
      image: "/images/product.webp",
      name: "Meat with salad",
      price: "30.00",
      discounts: "25.00",
      new: false,
    },
    {
      id: 3,
      image: "/images/product.webp",
      name: "Meat with salad",
      price: "30.00",
      discounts: "25.00",
      new: true,
    },
    {
      id: 4,
      image: "/images/product.webp",
      name: "Meat with salad",
      price: "30.00",
      discounts: "25.00",
      new: true,
    },
    {
      id: 5,
      image: "/images/product.webp",
      name: "Meat with salad",
      price: "30.00",
      discounts: "25.00",
      new: false,
    },
    {
      id: 6,
      image: "/images/product.webp",
      name: "Meat with salad",
      price: "30.00",
      discounts: "25.00",
      new: false,
    },
    {
      id: 7,
      image: "/images/product.webp",
      name: "Meat with salad",
      price: "30.00",
      discounts: "25.00",
      new: false,
    },
    {
      id: 8,
      image: "/images/product.webp",
      name: "Meat with salad",
      price: "30.00",
      discounts: "25.00",
      new: false,
    },
  ];
  return (
    <div
      className={`mt-8 ${
        bg ? "bg-gray-100 pt-16" : "pt-8"
      } md:rounded-[22%] p-6`}
    >
      <h1 className="text-center font-bold text-2xl">Top Sales</h1>
      <div className="flex justify-center mt-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-8">
          {Products.map((ele) => (
            <div key={ele.id} className="relative">
              <div className="sm:w-44 w-full h-48 rounded-tr-2xl rounded-bl-2xl overflow-hidden relative">
                <img
                  src={ele.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary bg-opacity-40">
                  {/* Edit Icon */}
                  <FiEdit className="text-white cursor-pointer" size={25} />

                  {/* Delete Icon */}
                  <AiOutlineDelete
                    className="text-white cursor-pointer"
                    size={25}
                  />
                </div>
              </div>
              <h2 className="font-medium text-sm mt-2">{ele.name}</h2>
              <h2 className="text-primary font-medium flex gap-4">
                ${ele.discounts ? ele.discounts : ele.price}{" "}
                <span className="text-gray-500 font-normal line-through">
                  ${ele.discounts && ele.price}
                </span>
              </h2>
              {ele.new && (
                <span className="absolute top-0 left-0 px-4 py-1 text-xs text-white bg-primary">
                  New
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSales;
