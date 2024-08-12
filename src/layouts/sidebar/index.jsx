import React from 'react'
import Logo from './logo/index'
import Menu from './menu/index'

function SideBar() {
  return (
    <aside className='w-[275px] min-h-screen '>
        <Logo/>
        <Menu/>
    
    </aside>
  )
}

export default SideBar