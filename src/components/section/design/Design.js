import React from "react";
import Pana from "/public/image/Pana.png";
import Button from "../../ui/button/Button";
import Image from "next/image";

export default function Design() {
  return (
    <div className="flex items-center justify-center mt-[50px]">
      <div className="flex flex-1 flex-col items-center justify-center max-w-6xl w-full px-4 space-y-8 lg:space-y-0 lg:space-x-16 lg:flex-row">
        <div className="flex-shrink-0">
          <Image src={Pana} alt="Icon3" />
        </div>

        <div className="flex-1 justify-center dark:text-neutral-white">
          <h1 className="text-neutral-d_grey text-headline-2 mb-4 font-medium text-center lg:text-left dark:text-neutral-white">
            How to design your site footer like we did
          </h1>
          <p className="text-neutral-grey font-regular text-body-3 mb-6 text-center lg:text-left dark:text-neutral-white">
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
          <div className="flex justify-center lg:justify-start">
            <Button label="Learn more" size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}
