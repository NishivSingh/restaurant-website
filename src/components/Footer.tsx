import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-10 md:h-20 py-20 px-10 text-red-500 flex items-center justify-between ">
      <Link href="/" className="uppercase font-bold text-xl">
        Aromas
      </Link>
      <p className="uppercase">© 2023 all rights reserved.</p>
    </div>
  );
};

export default Footer;
