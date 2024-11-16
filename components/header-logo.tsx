import Link from "next/link";
import React from "react";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className=" items-center hidden lg:flex">
        {/* <Image src="/logo.jpeg" alt="Logo" height={64} width={64} /> */}
        <div className="text-white font-semibold p-2 rounded-md mx-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">PennyWise</div>
      </div>
    </Link>
  );
};
