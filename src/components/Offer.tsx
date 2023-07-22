import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text Container  */}
      <div className="flex-1 text-white flex flex-col gap-8 p-6 justify-center items-center text-center">
        <h1 className="font-bold text-5xl xl:text-6xl">
          Delicious Burgur and French Fry
        </h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
        </p>
        <CountDown />
        <button className="p-4 bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>

      {/* Image Container  */}
      <div className="relative flex-1 w-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
