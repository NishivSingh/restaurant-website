import React from "react";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row">
      {/* Text Container  */}
      <div className="flex-1 text-white">
        <h1 className="">Delicious Burgur and French Fry</h1>
        <p className="">
          Progressively simplify effective e-toilers and process-centric methods
        </p>
      </div>

      {/* Image Container  */}
      <div className="relative flex-1 w-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
