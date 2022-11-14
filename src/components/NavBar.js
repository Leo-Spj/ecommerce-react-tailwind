import React from 'react'
import avatar_prueva from '../images/image-avatar.png'
import logo from '../images/logo.svg';

const NavBar = () => {
  return (
    <>
   
    <div className="navbar bg-base-100 max-w-tope m-auto">



    <div className="navbar-start w-4/5">
        <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Collections</a></li>
                <li><a>Men</a></li>
                <li><a>Women</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>

        <img className='md:ml-4' src={logo}></img>
        

        <div class="row-end hidden md:flex ml-6 ">

            <ul class="menu menu-horizontal p-0">
        
            <li tabindex="0">
                <a>
                Collections
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul class="p-2">
                <li><a>1</a></li>
                <li><a>2</a></li>
                </ul>
            </li>
                <li><a>Men</a></li>
                <li><a>Women</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>            
            </ul>
        </div>
    </div>

    

    




    <div className="navbar-end flex-none mr-2 w-1/5">

        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item bg-orange-400 border-none">8</span>
                </div>
            </label>

            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block bg-orange-400 border-none hover:bg-orange-300">View cart</button>
                </div>
                </div>
            </div>
        </div>


        <div className="dropdown dropdown-end">

            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={avatar_prueva} />
                </div>
            </label>

            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge bg-orange-400 border-none">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>

        </div>


    </div>
    </div>

    
    </>
  )
}

export default NavBar