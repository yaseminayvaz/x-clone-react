import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className='mt-0.5 mb-1'>

        <NavLink to='/' className='py-1 block group'>
                <div className='gap-5 p-3 rounded-full  inline-flex items-center text-xl pr-4 group-hover:bg-[#eff3f41a] '>
                <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"/></g></svg>
                        Anasayfa
                </div>
        </NavLink>
        <NavLink to='/explorer' className='py-1 block group'>
                <div className='gap-5 p-3 rounded-full  inline-flex items-center text-xl pr-4 group-hover:bg-[#eff3f41a] '>
                <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/></g></svg>
                       Keşfet
                </div>
        </NavLink>
        <NavLink to='/explorer' className='py-1 block group'>
                <div className='gap-5 p-3 rounded-full  inline-flex items-center text-xl pr-4 group-hover:bg-[#eff3f41a] '>
                <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"/></g></svg>
                        Bildirimler
                </div>
        </NavLink>
    </nav>
  )
}

export default Menu