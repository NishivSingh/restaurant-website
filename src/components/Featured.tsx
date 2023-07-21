import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper  */}
      <div className="w-max flex">
        {/* Single Item  */}
        <div className="w-screen h-[60vh] flex flex-col items-center justify-around">
          {/* Image Container  */}
          <div className="relative flex-1 w-full">
            <Image
              src="/temporary/p1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Text Container  */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-xl font-bold uppercase">Title</h1>
            <p className="">Info</p>
            <span className="">Price</span>
            <button className="">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
