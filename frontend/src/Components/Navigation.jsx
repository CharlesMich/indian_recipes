import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from "../Store/session"


export const Navigation = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionUser = useSelector(state => state.session.user);

  let user_id;
  if (sessionUser) {
    user_id = sessionUser.id
  }

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    setToggle(!toggle);
    navigate('/')
  };

  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  const navbarData = [
    {
      title:"Home",
      href:"/",
      cname: "border-t font-medium w-full flex justify-center p-2.5 mt-3 lg:border-none lg:p-0 lg:mt-0 lg:w-auto",
      access: 'all'
    },
    // {
    //   title:"Home",
    //   href:"/",
    //   cname: "border-t font-medium w-full flex justify-center p-2.5 mt-3 lg:border-none lg:p-0 lg:mt-0 lg:w-auto",
    //   access: 'all'
    // },
    {
      title:"Submit Recipe",
      href:"/submitresume",
      cname: "border-t font-medium w-full flex justify-center p-2.5 mt-3 lg:border-none lg:p-0 lg:mt-0 lg:w-auto",
      access: 'all'
    },
    {
      title:"About",
      href:"/aboutus",
      cname: "border-t font-medium w-full flex justify-center p-2.5 mt-3 lg:border-none lg:p-0 lg:mt-0 lg:w-auto",
      access: 'all'
    },
    {
      title:"Contact us",
      href:"/contactus",
      cname: "border-t font-medium w-full flex justify-center p-2.5 mt-3 lg:border-none lg:p-0 lg:mt-0 lg:w-auto",
      access: 'all'
    },

  ]


  return (
    <nav className="sticky top-0 w-full bg-white items-center flex justify-center p-4 z-50">
      <div className="flex justify-between sm:justify-between items-center w-full flex-wrap lg:flex-nowrap max-container1">
        <a href="/"  className="flex items-center">
        <div><span className="self-center text-2xl md:text-3xl font-regular  font-sans whitespace-nowrap text-black">FLAVORFUL</span><span className="self-center text-2xl md:text-3xl font-regular font-serif whitespace-nowrap text-coral-red"> INDIA</span></div>
        </a>
        <button  className="flex justify-end lg:hidden ring-1 ring-white rounded"  onClick={showNav}>
        {!toggle ? <i className="fas fa-bars text-black w-9 h-9 flex justify-center items-center hover:text-blue"></i> : <i className="fas fa-x text-black w-9 h-9 flex justify-center items-center hover:text-blue"></i>}
        </button>

        <ul
          className={`${toggle ? " flex" : " hidden"
            } flex-col justify-center items-center w-full first:mt-2 lg:flex-row  lg:w-auto lg:space-x-10 lg:flex lg:pt-2`}
        >

          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <NavLink
                  className="hover:text-coral-red"
                  // activeStyle={{ color:'text-coral-red' }}
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {user_id ? <button className={`${toggle ? " flex" : " hidden"
          } text-gray mx-auto lg:mx-0 lg:flex lg:mt-0 items-center justify-center font-medium px-1 p-2 rounded-lg mt-3 w-full lg:w-24 border-b lg:pt-4 lg:border-none`} onClick={handleLogout} >Log Out</button> : <Link to='/admin' onClick={showNav} className={`${toggle ? " flex" : " hidden"
            } text-gray mx-auto lg:mx-0 lg:flex lg:mt-0 items-center justify-center font-medium px-1 p-2 rounded-lg mt-3 w-full lg:w-24 border-b lg:pt-4 lg:border-none`}>LogIn</Link>}
      </div>

    </nav>

    // <ul>
    //     <li><NavLink to ="/">Home</NavLink></li> 
    // </ul>
  
  )
}
