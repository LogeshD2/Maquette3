import React from "react";
import TeslaImg from "/public/image/Tesla.png";
import Logo1B from "/public/image/Logo1B.png";
import Logo2 from "/public/image/Logo2.png";
import Logo3 from "/public/image/Logo3.png";
import Logo4 from "/public/image/Logo4.png";
import Logo5 from "/public/image/Logo5.png";
import Logo6 from "/public/image/Logo6.png";
import Image from "next/image";

export default function Tesla() {
  return (
    <div className="flex justify-center my-[50px]">
      <div className="flex flex-1 flex-col items-center justify-center max-w-6xl w-full px-4 lg:flex-row lg:space-x-16">
        <div className="flex-shrink-0 w-auto h-auto">
          <Image src={TeslaImg} alt="Icon3" />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <p className="text-neutral-grey font-regular text-body-2 mb-6 dark:text-neutral-white">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <p className="text-primary text-headline-4 mb-4 font-medium dark:text-neutral-white">
            Tim Smith
          </p>
          <p className="font-regular text-neutral-l_grey text-body-2 mb-4 dark:text-neutral-white">
            British Dragon Boat Racing Association
          </p>

          <div className="mt-8 flex flex-col items-center space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
            <div className="flex justify-around lg:justify-start lg:space-x-8 ">
              <Image src={Logo1B} alt="Logo 1 Blue" />
              <Image src={Logo2} alt="Logo 2" />
              <Image src={Logo3} alt="Logo 3" />
              <Image src={Logo4} alt="Logo 4" />
              <Image src={Logo5} alt="Logo 5" />
              <Image src={Logo6} alt="Logo 6" />
            </div>

            <p class="text-primary text-headline-4 font-regular cursor-pointer whitespace-nowrap dark:text-neutral-white">
              Meet all customers &rarr;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
