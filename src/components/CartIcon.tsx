import Link from "next/link";
import React from "react";
import Image from "next/image";
const CartIcon = () => {
  return (
    <Link href="/cart" className="flex gap-2">
      <div className="relative w-8 h-8 md:h-5 md:w-5">
        <Image src="/cart.png" alt="" fill></Image>
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
