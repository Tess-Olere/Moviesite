import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import Navlocker from "./Navlocker";


export default function Navhead() {
  const [isOpen, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const changeBg =()=> {
    window.scrollY >= 60 ? setShowNav(true) : setShowNav(false);
    
  }
  useEffect(()=> {
    changeBg()
    window.addEventListener('scroll', changeBg)
    return () => {
      window.removeEventListener('scroll', changeBg) 
    } 
  },[])
        const defaultStyle = "position-fixed top-0 w-100 "
        const defaultStyle1 = "position-fixed top-0 w-100 bg-white"
  return (
    <div className={showNav ? defaultStyle1 : defaultStyle} style={{zIndex:10}}>
        <div className="container-lg d-flex justify-content-between align-items-center mx-auto px-2 py-4">
          <NavLink className='fs-3 fw-bolder' to='/' style={{color:'#2dd4bf', zIndex:'10'}} >TvMaze</NavLink>
          <div className='d-md-none' style={{zIndex: '10', color:'#a1a1a1'}}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <NavLink className='d-none d-md-flex flex-grow-1 mx-4' to='/' style={{color:'#a1a1a1'}}>Tv Shows</NavLink>
       

            <div className='d-none d-md-flex gap-4'>
                    <NavLink to='/search' style={{color:'#a1a1a1'}}>Search</NavLink>
                    <a href='http://www.tvmaze.com' target='_blank' rel='noreferrer' className='fw-bold' style={{color:'#a1a1a1'}}>FIND OUT MORE</a>    
                </div>
        </div>
        {isOpen && <Navlocker isOpen={isOpen} setOpen={setOpen} />}
    </div>
  );
}
