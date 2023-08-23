import React from "react";
import Image from "next/image";
import p1 from "@/components/assets/ad.png";

function Header() {
  return (
    <header>
      <Image className="w-40 md:w-50 pb-10 md:pb-0 object-contain" src={p1} alt="kanBan Logo" width={200} height={100} />
      <div>
        <form></form>
      </div>
    </header>
  );
}

export default Header;
