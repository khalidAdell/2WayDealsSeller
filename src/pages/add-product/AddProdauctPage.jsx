import { IoAdd } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AddProdauctPage = () => {
  let breakpoints = {
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
  };
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center font-bold text-3xl my-8">Add Product</h1>
      <div className="bg-primary rounded-xl p-6 mx-4 flex justify-between flex-col md:flex-row gap-4">
        <div className="basis-[28%]">
          <div className="h-[15rem] bg-white rounded-tr-3xl shadow-lg rounded-bl-3xl w-full p-8 flex items-center justify-center relative">
            <IoAdd
              className="text-primary border-4 border-primary px-4 py-2 box-content"
              size={40}
            />
            <span className="absolute top-0 left-0 px-4 py-1 text-xs text-white bg-primary">
              Add
            </span>
          </div>
          <div className="flex gap-4 mt-6 justify-center">
            <div className="bg-white rounded-tr-3xl rounded-bl-3xl w-full px-2 py-3 flex items-center justify-center">
              <IoAdd
                className="text-primary border-2 border-primary px-1 box-content"
                size={18}
              />
            </div>{" "}
            <div className="bg-white rounded-tr-3xl rounded-bl-3xl w-full px-2 py-3 flex items-center justify-center">
              <IoAdd
                className="text-primary border-2 border-primary px-1 box-content"
                size={18}
              />
            </div>{" "}
            <div className="bg-white rounded-tr-3xl rounded-bl-3xl w-full px-2 py-3 flex items-center justify-center">
              <IoAdd
                className="text-primary border-2 border-primary px-1 box-content"
                size={18}
              />
            </div>
          </div>
        </div>
        <div className="basis-2/3 text-white flex flex-col justify-between">
          <div>
            <h1>Product name</h1>
            <input
              type="text"
              name=""
              id=""
              className="bg-primary mt-2 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] px-3 py-2 w-full outline-none placeholder:text-gray-100 rounded-lg"
              placeholder="Enter product name"
            />
            <div className="flex justify-between flex-wrap mt-4">
              <div className="flex">
                <div className="">
                  <h1>Price</h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="L.E"
                    className="mt-1 bg-orange-700 px-3 py-2 outline-none placeholder:text-gray-100 w-28 rounded-l-lg"
                  />
                </div>
                <div className="">
                  <h1>After tax</h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="L.E"
                    className="mt-1 bg-gray-100 px-3 py-2 outline-none rounded-r-lg w-24 text-gray-800"
                  />
                </div>
              </div>
              <div>
                <h1>Amount</h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter amount"
                  className="mt-1 bg-orange-700 px-3 py-2 w-full outline-none placeholder:text-gray-100 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-8 sm:w-[35rem] w-[20rem] overflow-hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={breakpoints}
              >
                <SwiperSlide className="bg-white rounded px-4 py-1 text-primary font-medium cursor-pointer">
                  Fruits
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded px-4 py-1 text-primary font-medium cursor-pointer">
                  Vegetables
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded px-4 py-1 text-primary font-medium cursor-pointer">
                  Pizzas
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded px-4 py-1 text-primary font-medium cursor-pointer">
                  Fruits
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded px-4 py-1 text-primary font-medium cursor-pointer">
                  Vegetables
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded px-4 py-1 text-primary font-medium cursor-pointer">
                  Pizzas
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <button className="bg-white mt-8 rounded px-8 py-2 w-fit text-primary font-medium">
            Add the Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProdauctPage;
