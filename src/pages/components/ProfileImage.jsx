import { useState } from "react";
import { CgClose } from "react-icons/cg";

const ProfileImage = () => {
  let [edit, setEdit] = useState(false);

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
    <div className="flex items-center justify-between max-w-5xl mx-auto md:flex-row flex-col">
      <div className="flex items-center gap-10">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src="/images/landing.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold">Khalid Adel</h1>
          <p className="text-2xl font-semibold mt-2">Id: 48678557</p>
        </div>
      </div>

      <button
        className="bg-primary outline-none py-[6px] px-16 text-white mt-3 shadow-lg"
        onClick={() => setEdit(true)}
      >
        Edit
      </button>
      {/* edit modale */}
      {edit && (
        <div className="fixed z-[9999] inset-0">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-20"
            onClick={() => setEdit(false)}
          ></div>
          {/* edit form  */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 min-w-[25rem] -translate-y-1/2 shadow-xl bg-gray-50 rounded-lg p-8">
            <div className="absolute -top-6 -left-6 border border-gray-500 cursor-pointer rounded-full bg-gray-200 p-3 text-gray-500">
              <CgClose size={27} onClick={() => setEdit(false)} />
            </div>
            <h2 className="text-sm font-semibold mb-4">Edit your info</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Khalid Adel"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 focus:border-blue-500 focus:bg-white outline-none px-3 py-2 w-full rounded-md bg-gray-50"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Current password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-300 focus:border-blue-500 focus:bg-white outline-none px-3 py-2 w-full rounded-md bg-gray-50"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="new-password"
                  placeholder="New password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-300 focus:border-blue-500 focus:bg-white outline-none px-3 py-2 w-full rounded-md bg-gray-50"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-gray-300 focus:border-blue-500 focus:bg-white outline-none px-3 py-2 w-full rounded-md bg-gray-50"
                />
              </div>
              <button
                type="submit"
                className="bg-primary w-full text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
