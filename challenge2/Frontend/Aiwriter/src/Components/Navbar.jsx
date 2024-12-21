import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [theme,setTheme]=useState('light');


    const handleTheme=(e)=>{
        if(e.target.checked){
            setTheme('night')
        } else{
            setTheme('light')
        }

    }


    useEffect(()=>{
     localStorage.setItem('theme',theme);
     const localtheme=localStorage.getItem('theme');
     document.querySelector('html').setAttribute('data-theme',localtheme)
    },[theme]);

    return (
        <div className="navbar bg-base-200 shadow-lg px-6 fixed z-10">
        <div className="flex-1">
          <a className="btn btn-ghost gap-0 text-secondary normal-case text-orange-300 text-2xl">Ai<span className="text-blue-800">Writer</span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex-row gap-4 mr-2">
            <NavLink to='/' className={({isActive})=>isActive? 'text-blue-600 font-bold':'font-bold'}><a>Home</a></NavLink>
            <NavLink to='/blogs'  className={({isActive})=>isActive? 'text-blue-600 font-bold':'font-bold'} ><a>Blogs</a></NavLink>
            <NavLink to='/about'  className={({isActive})=>isActive? 'text-blue-600 font-bold':'font-bold'}><a>About Us</a></NavLink>
            <NavLink to='/uploadimage'  className={({isActive})=>isActive? 'text-blue-600 font-bold':'font-bold'}><a>Ai for image</a></NavLink>
           
          </ul>
          <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input onChange={handleTheme} type="checkbox" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
        </div>
      </div>
    );
};

export default Navbar;