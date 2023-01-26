import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row items-center space-x-5 justify-center">
      <Image alt="logo" src={"/github100.png"} width={100} height={100} />
      <div>
        <p className="text-5xl">Search User</p>
        <p className="text-4xl font-bold">Github</p>
      </div>
    </div>
  );
}
