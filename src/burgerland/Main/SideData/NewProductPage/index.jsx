import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NewProductPage = ({ onClose, onSubmit }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isSutableForVegans, setIsSutableForVegans] = useState(false);
  const [productWeight, setProductWeight] = useState("");
  const [productCalories, setProductCalories] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage]=useState(null);

  const handleClose = () => {
    onClose();
    // const [errors, setErrors] = useState({
    //   name: "",
    //   des: "",
    //   weight: "",
    //   calories: "",
    //   price: "",
    // });

    // const handleSubmit = () => {
    //   const newErrors = {};

    //   // -------------
    //   if (!productName) {
    //     newErrors.name = "name is recuired!";
    //   }
    //   if (!productDescription) {
    //     newErrors.des = "descriptions are recuired!";
    //   }

    //   // ----------------
    //   if (Object.keys(newErrors).length > 0) {
    //     setErrors(newErrors);
    //     return;
    //   }

    //   // -----------------------
    //   setErrors({});
    //   // -----------------------
    // };
  };

  const handleSubmit = () => {
    onSubmit({
      name: productName,
      des: productDescription,
      checkbox: isSutableForVegans,
      weight: productWeight,
      calory: productCalories,
      price: productPrice,
      image: productImage,
    });
  };

  const handleImageChange=(e)=>{
    if(e.target.file && e.target.file[0]){
      setProductImage(URL.createObjectURL(e.target.file[0]))
    }
  }

  return (
    <>
      <div className=" absolute  top-0 right-0 w-[40%] h-full bg-white z-50 flex justify-center items-center p-7">
        <div className="flex flex-col justify-between w-full h-full ">
          <div className="flex items-center justify-between">
            <h1 className=" normal-case text-xl">Add new product</h1>
            <button
              className="close-modal bg-inherit border-none text-black"
              onClick={handleClose}
            >
              <IoMdClose size={30} />
            </button>
          </div>
          <div className="mt-5 normal-case ">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name of the product
            </label>
            <input
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-inherit rounded border border-gray-300 focus:ring-blue-100 focus:border-blue-100 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />

            {/*  /* --------------?????-------------- */}
          </div>
          <div className="mt-5 normal-case ">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name of the product
            </label>
            <div
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-inherit rounded border border-gray-300  focus:border-blue-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            >
              <div className=" flex items-center justify-center border w-fit p-1">
                X<span className="ml-2 capitalize">yechizi</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start mt-3">
            <form className="flex items-center justify-center">
              <input
                className="w-8 h-8 rounded-lg "
                type="checkbox"
                id="vegan"
                checked={isSutableForVegans}
                onChange={() => setIsSutableForVegans(!isSutableForVegans)}
              />
              <label htmlFor="vegan" className="ml-2">
                <span>logo</span>
                <span className="ml-2 capitalize">sutable for vegan</span>
              </label>
            </form>
          </div>

          <div className="mt-4 flex items-center justify-start">
            <div className=" p-2 flex flex-col">
              <label htmlFor="weight-gr">Weight in grams</label>
              <input
                className="border "
                type="text"
                size={10}
                id="weight-gr"
                value={productWeight}
                onChange={(e) => setProductWeight(e.target.value)}
              />
            </div>
            <div className=" p-2 flex flex-col">
              <label htmlFor="calories">Calories</label>
              <input
                className="border "
                type="text"
                size={10}
                id="calories"
                value={productCalories}
                onChange={(e) => setProductCalories(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="price">Price of the product</label>
            <input
              className="w-full border px-3"
              type="text"
              id="price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <input type="file" 
            accept="image/*"
            onChange={handleImageChange}
            />
          </div>

          <button
            className="w-full py-2 flex items-center justify-center rounded-md mt-4 bg-gradient-to-r from-[#181818] to-[#363636] text-white text-xl font-sans"
            onClick={handleSubmit}
          >
            <span>+</span>
            <span></span>
            add product to the menu
          </button>
        </div>
      </div>
      <div className=" absolute top-0 left-0 w-[100%] h-full z-20 bg-gradient-to-r from-[#1414147a] to-[#14141486] "></div>
    </>
  );
};

export default NewProductPage;
