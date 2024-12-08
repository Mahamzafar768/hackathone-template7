import React from 'react';

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8 w-full bg-white py-8">
      {/* First Section */}
      <div className="w-full flex flex-wrap items-start justify-between gap-6 lg:gap-12">
        {/* Intro Section */}
        <div className="intro flex flex-col gap-3 w-full sm:w-[300px] lg:w-auto">
          <h1 className="text-[#3563e9] text-2xl sm:text-3xl font-bold text-center lg:text-left">
            MORENT
          </h1>
          <p className="text-gray-500 text-sm sm:text-base text-center lg:text-left">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="lists flex flex-wrap gap-6 justify-center sm:justify-between w-full lg:w-auto">
          {/* About */}
          <div className="about">
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              <li className="font-bold text-lg sm:text-xl">
                <h1>About</h1>
              </li>
              <li className="text-gray-600 text-sm sm:text-base">How it works</li>
              <li className="text-gray-600 text-sm sm:text-base">Featured</li>
              <li className="text-gray-600 text-sm sm:text-base">Partnership</li>
              <li className="text-gray-600 text-sm sm:text-base">Business Relation</li>
            </ul>
          </div>

          {/* Community */}
          <div className="community">
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              <li className="font-bold text-lg sm:text-xl">
                <h1>Community</h1>
              </li>
              <li className="text-gray-600 text-sm sm:text-base">Events</li>
              <li className="text-gray-600 text-sm sm:text-base">Blog</li>
              <li className="text-gray-600 text-sm sm:text-base">Podcast</li>
              <li className="text-gray-600 text-sm sm:text-base">Invite a friend</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="socials">
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              <li className="font-bold text-lg sm:text-xl">
                <h1>Socials</h1>
              </li>
              <li className="text-gray-600 text-sm sm:text-base">Discord</li>
              <li className="text-gray-600 text-sm sm:text-base">Instagram</li>
              <li className="text-gray-600 text-sm sm:text-base">Facebook</li>
              <li className="text-gray-600 text-sm sm:text-base">Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="line border-t w-full border-[#e7eef6]"></div>

      {/* Last Section */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4">
        {/* Left Text */}
        <div className="text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-sm sm:text-base">©2022 MORENT. All rights reserved</h1>
        </div>

        {/* Right Links */}
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-bold text-sm sm:text-base">Privacy & Policy</h1>
          <h1 className="font-bold text-sm sm:text-base">Terms & Conditions</h1>
        </div>
      </div>
    </footer>
  );
}
