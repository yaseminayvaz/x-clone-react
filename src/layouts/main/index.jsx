import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar'
import RightBar from '../rightbar'


function Main() {
  return (
    <div className='w-[1265px] mx-auto flex'>
        <SideBar/>
        <main className='flex-1 flex gap-[30px]'>
            <main className='flex-1 border-x border-gray-600 max-w-[600px]'>
             <Outlet/>
            </main>
            <RightBar/>
        </main>
      
      
    </div>
  )
}

export default Main