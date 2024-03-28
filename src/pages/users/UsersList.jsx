import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function UsersList() {
  const [userDatas, setUserDatas] = useState(userRows);
  
  function delteUserHandler(userId){
     setUserDatas(userDatas.filter(user=>user.id!=userId))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "user",
      headerName: "user",
      width: 170,
      renderCell: (params) => {
        console.log(params);
        return(
          <div className="flex gap-2 w-full   items-center">
          <Link to='/'>
            <img  className="m-2 w-14 rounded-full" src={params.row.avatar} alt="" />
          </Link>
            <p>{params.row.username}</p>

          </div>
        )
      },
    },
    {
      field: "email",
      headerName: "email",
      type: "string",
      width: 210,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",
      width: 100,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 100,
      editable: true,
    },
    {
      field:'action',
      headerName:'Action',
      renderCell:(params)=>{
        return(
          <div className="flex gap-2">
            <Link to={`/user/${params.row.id}`}>
              <button className="bg-blue-700 px-2 py-1 rounded-lg text-white">edit</button>
            </Link>
            <DeleteOutlineIcon onClick={()=>delteUserHandler(params.row.id)} className="text-red-500 cursor-pointer hover:text-red-800"   
            />
          </div>
        )
      },
    }
  ];
  return (
    <div className=" w-full  lg:w-[70%]">
      <DataGrid
        rows={userDatas}
        columns={columns}
        PageSize={4}
        disableRowSelectionOnClick
      />
    </div>
  );
}
