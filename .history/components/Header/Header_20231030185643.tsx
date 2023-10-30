"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";


function Header() {
  const [ searchString, setSearchString] = useBoardStore((state) => [
   
    state.searchString,
    state.setSearchString,
  ]);

 
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-4/5 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50" />

        <Image
          className="w-46 md:w-62 pb-10 md:pb-0 object-contain"
          src="https://i.ibb.co/72x6hgk/todolist-Logo.png"
          alt="kanBan Logo"
          width={300}
          height={200}
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Searching..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Tracy Z" round size="50" color="#78b5e7" />
        </div>
      </div>
    </header>
  );
}

export default Header;
