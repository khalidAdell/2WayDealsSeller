import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GrFavorite, GrPhone } from "react-icons/gr";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  let [showAddButton, setShowAddButton] = useState();
  const pathName = useLocation().pathname;

  useEffect(() => {
    setShowAddButton(pathName.includes("add-product") ? false : true);
  }, [pathName]);

  let [showLogin, setShowLogin] = useState(true);
  let [showReset, setShowReset] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, like updating the profile
    console.log("Form submitted with data:", formData);
  };

  return (
    <header className="relative">
      <nav className="px-4 max-w-5xl mx-auto text-gray-500">
        {/* Top Section */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <GrPhone className="text-primary" size={20} />
            Call us: +0123456789
          </div>
          <div className="flex items-center space-x-4">
            <div className="">USD</div>
            <div className="">Language</div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-200 w-full absolute left-0 right-0"></div>
        {/* Logo and Search Section */}
        <div className="flex items-center justify-between sm:flex-row flex-col gap-6 py-4">
          <div className="flex items-center gap-2">
            <img src="/images/Rectangle 29.png" alt="" className="w-8 h-8" />
            <h1 className="text-xl text-gray-800 uppercase">2WayDeals</h1>
          </div>
          <div className="flex items-center sm:rtl:ml-4 sm:ltr:mr-4 sm:w-auto w-full">
            <div className="flex items-center border border-primary w-full">
              <input
                type="text"
                placeholder="Search for products"
                className="outline-none px-3 text-sm py-2 text-gray-700 sm:w-[17rem] w-full"
              />
              <div className=" text-gray-500 bg-primary px-1 text-center h-9 w-9 flex items-center justify-center">
                <svg
                  className="h-5 w-5 fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 16 9.5 6.5 6.5 0 0 0 9.5 3 6.5 6.5 0 0 0 3 9.5 6.5 6.5 0 0 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-gray-800 font-medium text-sm flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full overflow-hidden">
                <img
                  src="/images/product.webp"
                  alt=""
                  className="object-cover"
                />
              </div>
              Khalid Adel
            </div>
            <div className="relative">
              <GrFavorite size={20} />
              <span className="absolute bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center top-[-10px] right-[-10px]">
                5
              </span>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-200 w-full absolute left-0 right-0"></div>
        {/* Navigation Links */}
        <div
          className={`flex justify-center flex-wrap gap-6 ${
            showAddButton && "md:translate-x-20"
          }`}
        >
          <div className="flex items-center justify-center gap-6 text-primary">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-primary text-white p-2"
                  : "p-2"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-primary text-white p-2"
                  : "p-2"
              }
              to="/products"
            >
              Product
            </NavLink>

            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-primary text-white p-2"
                  : "p-2"
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </div>
          {showAddButton && (
            <Link
              to="/add-product"
              className="bg-primary outline-none py-2 rounded-lg px-6 text-white mt-3 capitalize font-medium md:translate-x-[8rem]"
            >
              Add the product
            </Link>
          )}
        </div>
      </nav>
      {/* login modale */}
      {showLogin && (
        <div className="fixed z-[9999] inset-0">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-20"
            onClick={() => setShowLogin(false)}
          ></div>
          {/* Login form  */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 min-w-[23rem] -translate-y-1/2 shadow-xl bg-gray-100 rounded-lg p-8">
            <div className="absolute -top-6 -left-6 border border-gray-500 cursor-pointer rounded-full bg-gray-200 p-3 text-gray-500">
              <CgClose size={27} onClick={() => setShowLogin(false)} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Email address"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 focus:border-blue-500 focus:bg-white outline-none px-3 py-2 w-full rounded-md bg-gray-50"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-300 focus:border-blue-500 focus:bg-white outline-none px-3 py-2 w-full rounded-md bg-gray-50"
                />
              </div>
              <div className="text-end block text-gray-500">
                <div
                  className="cursor-pointer text-sm mb-2 block outline-none"
                  onClick={() => {
                    setShowLogin(false);
                    setShowReset(true);
                  }}
                >
                  Forget Password?
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary w-full text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-serif"
              >
                Sign in
              </button>
              <button
                type="submit"
                className="bg-primary w-full text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-serif"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      )}
      {showReset && (
        <div className="fixed z-[9999] inset-0">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-20"
            onClick={() => setShowReset(false)}
          ></div>
          {/* Login form  */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 min-w-[23rem] -translate-y-1/2 shadow-xl bg-gray-100 rounded-lg p-8">
            <div className="absolute -top-6 -left-6 border border-gray-500 cursor-pointer rounded-full bg-gray-200 p-3 text-gray-500">
              <CgClose size={27} onClick={() => setShowReset(false)} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Email address"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 focus:border-blue-500 focus:bg-white outline-none px-3 py-2 w-full rounded-md bg-gray-50"
                />
              </div>

              <button
                type="submit"
                className="bg-primary w-full text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-serif"
              >
                Send email
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
