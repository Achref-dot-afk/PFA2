import { FaPercent } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { IoMdAddCircleOutline } from "react-icons/io";
import NH4LineChartPerMonth from "./charts/NH4LineChartPerMonth";
import PxOyLineChartPerMonth from "./charts/PxOyLineChartPerMonth";
import { SiMoleculer } from "react-icons/si";

import { useState } from "react";




const Main = () => {
  const [fileSelected,setFileSelected]=useState(null);
  
  
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile)
    setFileSelected(selectedFile.name);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Add Data button clicked");
    
  };
  

  return (
    <div className=" w-full h-full flex flex-col gap-5 mx-auto ">
      <h1 className=" text-blue-900 text-2xl font-bold py-1">Global Dashboard</h1>
      <div className="flex justify-between items-stretch py-2  ">
        <div className="shadow-xl flex">
            <div className="text-center p-6 bg-blue-600 flex justify-center items-center rounded-l text-2xl text-gray-50"><FaPercent /></div>
            <div className="flex pb-5 pt-1 pl-2 pr-4  justify-start flex-col">
              <p className="text-sm">Overall average rate</p>
              <span className=" text-gray-500 text-xs">(NH4 and PxOy)</span>
              <div className=" font-bold text-lg ">2.6</div>
            </div>
          </div>
          <div className="shadow-xl rounded flex">
            <div className="text-center p-6 bg-red-600 flex justify-center items-center rounded-l text-gray-50 text-2xl"><SiMoleculer /></div>
            <div className="flex pb-5 pt-1 pl-2 pr-4  justify-start flex-col">
              <p className="text-sm">NH4 average rate</p>
              <div className=" font-bold text-lg ">2.6</div>
            </div>
          </div>
          <div className="shadow-xl flex rounded">
            <div className="text-center p-6 bg-green-600 flex justify-center rounded-l items-center text-2xl text-gray-50"><SiReact /></div>
            <div className="flex pb-5 pt-1 pl-2 pr-4  justify-start flex-col">
              <p className="text-sm">PxOy average rate</p>
              <div className=" font-bold text-lg ">2.6</div>
            </div>
          </div>
          <div className="shadow-xl rounded flex pr-4">
            <div className="text-center p-6 bg-yellow-500 flex justify-center items-center rounded-l text-2xl text-gray-50"><IoMdAddCircleOutline /></div>
            <div className="flex pb-3 pt-1 pl-2 pr-4 items-center  justify-center">
              <form className={`w-40 ${!fileSelected && "flex flex-col"}`} onSubmit={handleSubmit} >
                <label htmlFor="file" className="cursor-pointer p-1 my-2 bg-green-400 text-white text-xs rounded ">Upload file</label>
                
                <input type="file" id="file" name="file" className="hidden" onChange={handleChange} />
                {fileSelected && <p className="text-xs truncate my-2 ">{fileSelected}</p> } 
                <input type="submit" value="Add Data" className=" cursor-pointer border border-gray-400 text-xs my-2" />
              </form>
            </div>
          </div>
        
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <p className="text-xl  text-blue-900 ">Last month analysis</p>
        <div className="grid grid-cols-2 grid-rows-1 gap-5 h-80">
        <div className="bg-gray-50  shadow-xl">
            <NH4LineChartPerMonth />
        </div>
        <div className="bg-gray-50  shadow-xl">
            <PxOyLineChartPerMonth  />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Main
