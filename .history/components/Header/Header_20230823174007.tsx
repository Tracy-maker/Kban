import React from "react";
import Image from "next/image";
import p1 from "@/components/assets/ad.png";
import { MagnifyingGlassIcon,UserCircleIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between items-center">
      <Image className="w-40 md:w-50 pb-10 md:pb-0 object-contain" src={p1} alt="kanBan Logo" width={200} height={100} />
      <div>
        <form>
          <input type="text"  />
          <button type="submit">Search</button>
        </form>
      </div>
      </div>
    </header>
  );
}

export default Header;
