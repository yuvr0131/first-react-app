import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { DISH_URL } from "../utils/constant";

const FoodList = (answer1) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    //dispatch an action
    dispatch(addItem("pizza"));
  };

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">MENU LIST</h1>
      <div className=" accordian w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer">
          <span className=" font-bold text-lg">
            <h1>Starters:</h1>
          </span>
          <span>🔽</span>
        </div>
        <div className=" answer1">
          <span>
            <span className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Chicken Tikka - ₹699</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "a33ljlnaumogiiiibywy"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Mutton Seekh Kebab - ₹799</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/6/24/5ce18593-ad57-4014-af40-2f6c893a5b79_32f44234-abec-4443-9e06-45ae1442fa01.jpeg"
                  }
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Fish Amritsari - ₹879</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "290a2cb82273f0ae8aa792103fcd8f89"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p> Prawn Tempura - ₹999 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "kdlhbpzgpaoy7zqhvv5y"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p> Chicken Wings - ₹599 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "dadf032b951efbfe61ca434501311f55"}
                  className="w-25"
                />
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          {" "}
          <span className="font-bold text-lg">
            <h1>Main Course</h1>
          </span>
          <span>🔽</span>
        </div>
        <div>
          <span>
            <span className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Butter Chicken - ₹1099</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "296bb7958da7f287453a70ecde17bbb5"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Mutton Rogan Josh - ₹1199</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/7/1/8dcfa23b-8096-4943-b592-e6c2928a7cf5_ab1e8f88-b100-4e88-893d-4424c2745229.jpg"
                  }
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Fish Amritsari - ₹879</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "290a2cb82273f0ae8aa792103fcd8f89"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p> Chicken Biryani -₹999 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/6/24/13eeaa65-aba3-4919-a40f-7e155fc47f7b_f4cfa184-17d7-4138-9cc3-2c687cba130d.jpeg"
                  }
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p> Chicken Chettinad - ₹1079 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "gtgrl07oo30rm3fdpvb0"} className="w-25" />
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          {" "}
          <span className="font-bold text-lg">
            <h1>Bread</h1>
          </span>
          <span>🔽</span>
        </div>
        <div>
          <span>
            <span className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Tandoori Roti - ₹149</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/6/2/0624dfcf-6a8f-4393-8707-d0016b48c011_d4515066-eb5e-49e6-a5a0-5ea16dc71f1c.jpeg"
                  }
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Butter Naan - ₹199</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "5222ef326542191fe592f02acbc0e63f"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Garlic Naan - ₹249</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "dguny93hfomojuwyphr"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p> Keema Naan - ₹329 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "rs3hsqpvgpnuaoigukon"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p> Lachha Paratha - ₹249 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/6/2/67ce9619-3c01-4a61-b3d9-8063e165f399_50be49ea-844e-463a-bc1c-a9186e9ea70e.jpeg"
                  }
                  className="w-25"
                />
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          {" "}
          <span className="font-bold text-lg">
            <h1>Rice:</h1>
          </span>
          <span>🔽</span>
        </div>
        <div>
          <span>
            <span className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Steamed Rice - ₹249</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "kpu46sg8n5cvzyp3hehz"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Jeera Rice - ₹299</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "i5vghqc59pyvliejxp02"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Chicken Fried Rice - ₹879</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "d3e38526d3edac34ce611b7db70ff0b0"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p> Lamb Biryani - ₹1159 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/6/24/4a785936-2dd1-4afa-99a2-266967726219_5ee2497d-9395-46c6-8589-1bda6ba4b48f.jpeg"
                  }
                  className="w-25"
                />
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          {" "}
          <span className="font-bold text-lg">
            <h1>Salads and Raita:</h1>
          </span>
          <span>🔽</span>
        </div>
        <div>
          <span>
            <span className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Chicken Caesar Salad - ₹799</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "d5f5f91dfc4ec62995ae858c2c7d305a"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Green Salad - ₹649</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "2ef38891a09808a5ab3a4f8d23fd939b"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Onion Raita - ₹249</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "fxnbiwziwvlctkuvg5gz"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Mint Raita - ₹249 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "6fc79813332bfcc73e548e2ea1d95904"}
                  className="w-25"
                />
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          {" "}
          <span className="font-bold text-lg">
            <h1>Desserts:</h1>
          </span>
          <span>🔽</span>
        </div>
        <div>
          <span>
            <span className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Gulab Jamun - ₹329</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "whstulemtvr7vpzmornh"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Rasmalai - ₹369</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "30bbbfa898b8a0d46e7e58a2da5e0b25"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>ChocolateMousse - ₹479</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/7/1/80a991bc-f6eb-46af-bbaa-09cafa8dfd85_24c2561a-dca6-435c-baba-f3434b6fd692.jpeg"
                  }
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Tiramisu - ₹519 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "8c3cf6f4d9fe4c2b2e42f9424d74ab3e"}
                  className="w-25"
                />
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between">
          {" "}
          <span className="font-bold text-lg">
            <h1>Beverages:</h1>
          </span>
          <span>🔽</span>
        </div>
        <div>
          <span>
            <span className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Mango Lassi - ₹329</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={DISH_URL + "98b4e88c0aaf6759e0e36fca8cad35e5"}
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Fresh LimeSoda - ₹249</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/3/12/5fe5e090-d282-45be-8fa1-e21a11c1faad_ef42e24b-9e07-4ec4-a64b-d17fa7e233ba.jpg"
                  }
                  className="w-25"
                />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Masala Chai - ₹199</p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "j0ba8tnmj8nlwhsgqw39"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Cold Coffee - ₹329 </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img src={DISH_URL + "cki6tc0x9vlk7jjk9l6n"} className="w-25" />
              </div>
            </span>
            <span className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
              <p>Lassi </p>
              <div className="w-3/12 p-4">
                {" "}
                <div className="absolute">
                  <button
                    className="p-1 mb-20 mx-8 rounded-lg bg-black text-white shadow-lg"
                    onClick={handleAddItem}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={
                    DISH_URL +
                    "FOOD_CATALOG/IMAGES/CMS/2024/6/3/52bc452b-99a1-4877-841d-253d938d4a3e_bcba95d6-63e9-4cd8-9cad-b152761f323d.jpeg"
                  }
                  className="w-25"
                />
              </div>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default FoodList;
