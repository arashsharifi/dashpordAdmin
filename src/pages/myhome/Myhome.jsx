import React, { useState } from "react";
import Card from "../../components/card/Card";
import MyChart from "../../components/mychart/MyChart";
import{ xAxisData} from "../../data";

import ListTrand from "../../components/listTrand/ListTrand";
import TableAction from "../../components/tableAction/TableAction";
export default function Myhome() {

  return (
<div className="flex flex-col">
    <Card/>
    <div className="w-full lg:w-[90%] lg:mx-auto mt-8">
    <MyChart title="Month-sale" data={xAxisData} dataKey="sale" grid={true}/>
    </div>
    <div className="flex flex-col gap-2  lg:flex-row ">
      <div className="flex flex-col gap-2 w-full lg:w-[40%]">
      <h1 className='text-3xl font-bold ml-10 '>new join users</h1>
   <ListTrand/>
      </div>
   <TableAction/>
    </div>
</div> 
  );
}
