import React, { useState } from 'react'

import pii from "../../../public/images/user3.jfif"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NewMembers } from '../../data';
import TrandUser from '../tranduser/TrandUser';

export default function ListTrand() {
    const [newMember,setNewMember]=useState(NewMembers)

  return (
    <div className=' mx-2 my-10 flex flex-col gap-2 border rounded-lg shadow-lg w-full  '>
       
    <ul className=' flex flex-col gap-2'>
      {newMember.map((me)=>(
          <TrandUser key={me.id} user={me} /> 
      ))}
    </ul>
    </div>
  )
}
