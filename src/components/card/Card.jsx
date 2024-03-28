import React from 'react'
import SouthIcon from '@mui/icons-material/South';
export default function Card() {
  return (
    <div className="mt-4 p-2 w-full grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 ">
    <div className="flex flex-col gap-2 bg-white shadow-md w-full p-3 rounded-md lg:max-w-[450px] h-[200px]">
       <h1 className="text-2xl">Revanue</h1>
       <div className="flex gap-2 items-center">
       <span className="text-4xl font-bold italic ">$2,415</span>
        <span><span>-11,4</span> <SouthIcon className="text-red-600"/> </span>
       </div>
       <p className="md: mt-4">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="flex flex-col  gap-2 bg-white shadow-md w-full p-3 lg:max-w-[450px] h-[200px] rounded-md">
       <h1 className="text-2xl">Revanue</h1>
       <div className="flex gap-2 items-center">
       <span className="text-4xl font-bold italic">$2,415</span>
        <span><span>-11,4</span> <SouthIcon className="text-red-600"/> </span>
       </div>
       <p className="md: mt-7">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div className="flex flex-col gap-2 bg-white shadow-md w-full p-3 lg:max-w-[450px]  h-[200px] rounded-md">
       <h1 className="text-2xl">Revanue</h1>
       <div className="flex gap-2 items-center">
       <span className="text-4xl font-bold italic">$2,415</span>
        <span><span>-11,4</span> <SouthIcon className="text-red-600"/> </span>
       </div>
       <p className="md: mt-7">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
      
  
   </div>
  )
}
