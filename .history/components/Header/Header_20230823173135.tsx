import React from "react";
import Image from "next/image";
import p1 from "@/components/assets/ad.png";

function Header() {
  return (
    <header>
      <Image src={p1} alt="kanBan Logo" width={200} height={100} />
      <div></div>
    </header>
  );
}

export default Header;
