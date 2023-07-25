import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-20 lg:px-10 xl:px-20">
      {/* Left Links  */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Logo  */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Aromas</Link>
      </div>

      {/* Menu  */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links  */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-2 r-2 lg:static flex items-center cursor-pointer gap-2 bg-orange-500 text-white rounded-md p-1">
          <div>
            <Image src="/phone.png" alt="" width={20} height={20} />
          </div>
          <span>123-4777-254</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/menu">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
