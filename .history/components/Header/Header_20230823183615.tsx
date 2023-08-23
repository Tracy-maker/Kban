"use client";
import React from "react";
import Image from "next/image";
import p1 from "@/components/assets/ad.png";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
       <div className="absolute top-0 left-0 w-full h-100 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md"/>

        <Image
          className="w-40 md:w-50 pb-10 md:pb-0 object-contain"
          src={p1}
          alt="kanBan Logo"
          width={300}
          height={100}
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Searching..."
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Tracy Z" round size="50" color="#78b5e7" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#78b5e7]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#78b5e7] mr-1"/>
          Now counting your tasks of the day...
        </p>
      </div>
    </header>
  );
}

export default Header;
