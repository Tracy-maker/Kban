"use client"
import React from "react";
import Image from "next/image";
import p1 from "@/components/assets/ad.png";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-green-500/10 rounded-b-2xl">
        <Image
          className="w-40 md:w-50 pb-10 md:pb-0 object-contain"
          src={p1}
          alt="kanBan Logo"
          width={200}
          height={100}
        />
        <div>
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Searching..."
              className="flex-1 outline-none p-2"
            />
            <button type="submit">Search</button>
          </form>
          <Avatar/>
        </div>
      </div>
    </header>
  );
}

export default Header;
