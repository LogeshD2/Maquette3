import React from "react";
import Image1 from "/public/image/Image1.png";
import Image2 from "/public/image/Image2.png";
import Image3 from "/public/image/Image3.png";
import Image from "next/image";

export default function Caring() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 lg:mt-[50px]">
      <h1 className="text-headline-2 text-neutral-d_grey font-medium dark:text-neutral-white">
        Caring is the new marketing
      </h1>
      <p className="font-regular text-body-2 mt-2 text-neutral-d_grey max-w-xl mx-auto dark:text-neutral-white">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends, and more. See whos joining the community, read about
        how our community is increasing their membership income and lots more.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">
        <div className="bg-neutral-silver rounded-lg shadow-lg overflow-hidden">
          <Image
            src={Image1}
            alt="Creating Streamlined Safeguarding Processes with OneRen"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-medium mb-2 dark:text-neutral-white">
              Creating Streamlined Safeguarding Processes with OneRen
            </h2>
            <a
              href="#"
              className="text-primary font-medium dark:text-neutral-white"
            >
              Readmore →
            </a>
          </div>
        </div>

        <div className="bg-neutral-silver rounded-lg shadow-lg overflow-hidden">
          <Image
            src={Image2}
            alt="What are your safeguarding responsibilities and how can you manage them?"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-medium mb-2 dark:text-neutral-white">
              What are your safeguarding responsibilities and how can you manage
              them?
            </h2>
            <a
              href="#"
              className="text-primary font-medium dark:text-neutral-white"
            >
              Readmore →
            </a>
          </div>
        </div>

        <div className="bg-neutral-silver rounded-lg shadow-lg overflow-hidden">
          <Image
            src={Image3}
            alt="Revamping the Membership Model with Triathlon Australia"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-medium mb-2 dark:text-neutral-white">
              Revamping the Membership Model with Triathlon Australia
            </h2>
            <a
              href="#"
              className="text-primary font-medium dark:text-neutral-white"
            >
              Readmore →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
