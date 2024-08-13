import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { mainMenu } from '../../../utils/consts'
import classNames from 'classnames'
import More from './more'
import Submit from './submit'

function Menu() {
  return (
    <nav className='mt-0.5 mb-1'>
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} className='py-1 block group' key={index}>
          {({ isActive }) => (
            <div
              className={classNames(
                'gap-5 p-3 rounded-full inline-flex items-center text-xl pr-4 group-hover:bg-[#eff3f41a] transition-colors',
                { 'font-bold': isActive }
              )}
            >
            <div className='w-[26.25px] h-[26.25px] relative'>
                {menu?.notification &&(
                     <span className='w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px] text-white'>{menu?.notification}</span>
                )}
              
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
            </div>
            <div className='pr-4 text-xl'>
                {menu.title}
            </div>
              
            </div>
          )}
        </NavLink>
      ))}

     <More/>
     <Submit/>
    </nav>
  )
}

export default Menu
