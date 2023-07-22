import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper  */}
      <div className="w-max flex">
        {/* Single Item  */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[65vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:w-[33vw]"
          >
            {/* Image Container  */}
            {item.img && (
              <div className="relative flex-1 w-full hover:scale-125 m-4 transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}

            {/* Text Container  */}
            <div className="flex-1 flex flex-col gap-4 items-center justify-center">
              <h1 className="text-xl font-bold uppercase pt-2 xl:text-2xl">
                {item.title}
              </h1>
              <p className="p-4 text-center">{item.desc}</p>
              <span className="font-bold text-xl">₹{item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
