import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/covid-logo.png'

function Aside() {
   
  return (
    <div className=' bg-amber-500  '>
        <picture className='flex mt-8'>
          <img src={logo} alt=''  width='100em' className='m-auto ' />
          <h1 className='m-auto text-xl font-black  font-sans '>Covid tracker</h1>
          
            
        </picture>
        <nav className='mt-24 grid grid-rows-4 gap-24 pb-10 m-auto text-xl font-black text-white font-sans '>
            <NavLink className={({ isActive }) =>
              isActive ? 'text-black m-auto text-xl font-serif' : 'm-auto'
            } 
            to='/' >Overview</NavLink>
            <NavLink to='/symptoms'  className={({ isActive }) =>
              isActive ? 'text-black m-auto text-xl font-serif' : 'm-auto'
            }  >Symptoms</NavLink>
            <NavLink to='/statistics' className={({ isActive }) =>
              isActive ? 'text-black m-auto text-xl font-serif' : 'm-auto'
            } >Statistics</NavLink>
            {/* <NavLink to='/globaltrends' className={({ isActive }) =>
              isActive ? 'text-black m-auto text-xl font-serif' : 'm-auto'
            }  >Global Trends</NavLink> */}
        </nav>

    </div>
  )
}

export default Aside