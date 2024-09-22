import React from "react";
import Image from "next/image";

// Containers
import Button from "../../ui/button/Button";

// Image
import illustration from "/public/image/Illustration.png";

export default function Herosection() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-neutral-silver">
      <div className="flex flex-1 items-center justify-center max-w-6xl w-full px-4 flex-col lg:flex-row">
        <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-neutral-d_grey text-headline-1 mb-4 font-medium dark:text-neutral-white">
            Lessons and insights <p className="text-primary">from 8 years</p>
          </h1>
          <p className="text-neutral-d_grey font-regular text-body-2 mb-6 dark:text-neutral-white">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button label="Register" size="large" />
          </div>
        </div>

        <div className="flex-shrink-0 ml-8">
          <Image
            src={illustration}
            alt="Description"
            className="w-64 h-auto lg:w-96"
          />
        </div>
      </div>

      <div className="flex justify-center my-8 lg:mb-8 lg:mt-0">
        <div className="h-2 w-2 rounded-full bg-green-500 mx-1"></div>
        <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
        <div className="h-2 w-2 rounded-full bg-gray-300 mx-1"></div>
      </div>
    </div>
  );
}
