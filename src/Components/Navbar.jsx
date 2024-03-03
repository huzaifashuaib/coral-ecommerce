import React, { useState } from 'react'
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/Images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navitems = [
    { title: "Jewelry & Accessories", path: '/' },
    { title: "Clothing & Shoes", path: '/' },
    { title: "Home & Living", path: '/' },
    { title: "Wedding & Party", path: '/' },
    { title: "Toys & Entertainment", path: '/' },
    { title: "Art & Collectibles", path: '/' },
    { title: "Craft Supplies & Tools", path: '/' }
  ]
  return (
    <header className=' max-w-screen-2xl xl:px-28 px-4 m-auto'>
      <nav className=' flex items-center justify-between md:py-4 pt-6 pb-3 container m-auto'>
        <FaSearch className='text-Black hidden md:block h-5 w-5 cursor-pointer' />

        {/* Logo*/}
        <a href="/"><img src={logo} alt="" /></a>

        {/* account and shopping btn */}
        <div className=' text-lg text-black sm:flex items-center gap-4 hidden '>
          <a href="" className=' flex items-center gap-2 '><FaUser />Account</a>
          <a href="" className=' flex items-center gap-2 '><FaShoppingBag />Shopping</a>
        </div>

        {/* navbar for small devices */}
        <div className='flex sm:hidden'>
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? <FaTimes className='w-5 h-5 text-Black' /> : <FaBars className='w-5 h-5 text-Black' />
            }
          </button>
        </div>

      </nav>

      <hr />

      {/*Category Items */}

      <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-Black hidden'>
          {navitems.map(({ title, path }) => (
            <li key={title} className=' hover:text-orange-500'><Link to={path}>{title}</Link></li>
          ))}
        </ul>
      </div>

      {/* Only Mobile Menu items */}
      <ul className={`bg-Black text-white px-4 py-4 rounded ${isMenuOpen ? '':'hidden'}`}>
        {navitems.map(({ title, path }) => (
          <li key={title} className=' hover:text-orange-500 my-3 cursor-pointer'><Link to={path}>{title}</Link></li>
        ))}
      </ul>

    </header>
  )
}

export default Navbar