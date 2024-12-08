'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5'; // Import hamburger and close icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
      {/* Top Section */}
      <div className="first flex flex-col md:flex-row items-center gap-4 md:gap-16 w-full">
        {/* Logo */}
        <h1 className="text-[#3563e9] text-4xl font-bold">MORENT</h1>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button className="text-2xl focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Search Input */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:block input relative w-full md:w-auto mt-4 md:mt-0`}
        >
          <Image
            src={'/search-normal.png'}
            alt="search icon"
            width={24}
            height={24}
            className="absolute top-1/2 left-3 transform -translate-y-1/2"
          />
          <input
            type="text"
            title="search"
            placeholder="Say something here"
            className="border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12"
          />
          <Image
            src={'/filter.png'}
            alt="filter icon"
            width={24}
            height={24}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          />
        </div>
      </div>

      {/* Icons Section */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } icons mt-4 md:mt-0 md:block flex justify-center`}
      >
        <Image
          src={'/Profil & Notification.png'}
          alt="profile and notifications"
          width={236}
          height={44}
        />
      </div>
    </div>
  );
}
