import React from "react";
import MyChart from "../../components/mychart/MyChart";
import { Link } from "react-router-dom";
import { productData } from "../../data";
import pic from "../../../public/images/pro2.jfif"
export default function Product() {
  return (
    <div className="m-3 flex flex-col gap-4">
    <div className=" m-4 px-4 flex justify-between items-center">
      <p className="text-2xl font-bold">Product </p>
      <Link to="/newProduct">
        <button className="bg-teal-800 px-3 py-2 m-2 text-white rounded-lg">
          Creact
        </button>
      </Link>
    </div>
    <div className=" flex flex-col gap-2 lg:flex-row w-full ">
        <MyChart title="sale in mounth" data={productData} dataKey="sale"/>
       <div className="border w-full rounded-lg shadow-xl flex flex-col">
        <div className="flex m-4">
            <img className="w-14" src={pic} alt="nooot" />
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex justify-between w-[50%]  p-2">
                <p className="font-bold">ID:</p>
                <p className="text-gray-700 opacity-65">132</p>
            </div>
            <div className="flex justify-between w-[50%]  p-2">
                <p className="font-bold">Name:</p>
                <p className="text-gray-700 opacity-65">Dell laptop</p>
            </div>
            <div className="flex justify-between w-[50%]  p-2">
                <p className="font-bold">Sales:</p>
                <p className="text-gray-700 opacity-65">$90000</p>
            </div>
            <div className="flex justify-between w-[50%]  p-2">
                <p className="font-bold">Active:</p>
                <p className="text-gray-700 opacity-65">yse</p>
            </div>
           
            <div className="flex justify-between w-[50%]  p-2">
                <p className="font-bold">In Stock:</p>
                <p className="text-gray-700 opacity-65">no</p>
            </div>
        </div>
       </div>
    </div>
    <div className="border w-full rounded-lg shadow-xl flex justify-between p-4">
        <div className="flex flex-col gap-2">
            <p className="text-gray-700 opacity-65"> product name</p>
          
            <hr />
<label  htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">in stock</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose </option>
  <option value="yes">yess</option>
  <option value="no">no</option>
</select>

        </div>
        <img className="w-52" src={pic} alt="nooot" />
    </div>
    </div>
  );
}
