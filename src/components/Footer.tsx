import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="uppercase font-bold text-xl">
        Aromas
      </Link>
      <p className="uppercase">© 2023 all rights reserved.</p>
    </div>
  );
};

export default Footer;