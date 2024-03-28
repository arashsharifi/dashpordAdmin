import React, { useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { products } from '../../data';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Products() {
  const [product,setProduct]=useState(products)

function delteUserHandler(productID){
  setProduct(product.filter(pro=>pro.id!=productID))
}

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "name",
      headerName: "name",
      width: 170,
      renderCell: (params) => {
        console.log(params);
        return(
          <div className="flex gap-2 w-full   items-center">
          <Link to='/'>
            <img  className="m-2 w-14 rounded-full" src={params.row.avatar} alt="" />
          </Link>
            <p>{params.row.name}</p>

          </div>
        )
      },
    },
    {
      field: "title",
      headerName: "title",
      type: "string",
      width: 110,
      editable: true,
    },
   
    {
      field:'action',
      headerName:'Action',
      renderCell:(params)=>{
        return(
          <div className="flex gap-2">
            <Link to={`/product/${params.row.id}`}>
              <button className="bg-blue-700 px-2 py-1 rounded-lg text-white">edit</button>
            </Link>
            <DeleteOutlineIcon onClick={()=>delteUserHandler(params.row.id)} className="text-red-500 cursor-pointer hover:text-red-800"   
            />
          </div>
        )
      },
    }
  ];

  console.log(product)
  return (
    <div className='flex flex-col'>
    
    <div className=" w-full  lg:w-[70%]">
      <DataGrid
        rows={product}
        columns={columns}
        PageSize={4}
        disableRowSelectionOnClick
        checkboxSelection
      />
    </div>
      <p className='text-2xl font-bold ml-6'>Click the edit button on this page</p>
    </div>
  )
}
