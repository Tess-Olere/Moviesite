import React from 'react'
import { NavLink } from "react-router-dom";


export default function Navlocker({isOpen, setOpen}) {
  return (
    <div className='w-100 h-100 position-fixed top-0 left-0 navlocker'>
        <div className='mx-2 text-white text-uppercase text-lg' style={{marginTop:'5rem'}}>
        <NavLink to='/search' onClick={() => setOpen(!isOpen)}>
            <p className='mb-4' style={{color:'#a1a1a1'}}>Search</p>
        </NavLink>
        <NavLink to='/search' onClick={() => setOpen(!isOpen)}>
            <p className='mb-4' style={{color:'#a1a1a1'}}>Tv shows</p>
        </NavLink>
        <a href='http://www.tvmaze.com' target='_blank' rel='noreferrer' className='fw-bold text-white ' >FIND OUT MORE</a>  
        </div>  
    </div>
    
  )
}
