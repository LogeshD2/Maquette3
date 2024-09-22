import React from "react";
import Icon1 from "/public/image/Icon1.png";
import Icon2 from "/public/image/Icon2.png";
import Icon3 from "/public/image/Icon3.png";
import Frame35 from "/public/image/Frame35.png";
import Button from "../../ui/button/Button";
import Logo1 from "/public/image/Logo1.png";
import Logo2 from "/public/image/Logo2.png";
import Logo3 from "/public/image/Logo3.png";
import Logo4 from "/public/image/Logo4.png";
import Logo5 from "/public/image/Logo5.png";
import Logo6 from "/public/image/Logo6.png";
import Logo7 from "/public/image/Logo7.png";
import Image from "next/image";

export default function Ourclients() {
  return (
    <>
      <div className="mt-10 text-center">
        <h1 className="text-headline-2 text-neutral-d_grey font-medium dark:text-neutral-white">
          Our Clients
        </h1>
        <p className="font-regular text-body-2 mt-4 text-neutral-grey dark:text-neutral-white">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="mt-8 flex justify-around">
        <Image src={Logo1} alt="Logo 1" />
        <Image src={Logo2} alt="Logo 2" />
        <Image src={Logo3} alt="Logo 3" />
        <Image src={Logo4} alt="Logo 4" />
        <Image src={Logo5} alt="Logo 5" />
        <Image src={Logo6} alt="Logo 6" />
        <Image src={Logo7} alt="Logo 7" />
      </div>

      <div className="text-center mt-[50px]">
        <h1 className="text-headline-2 text-neutral-d_grey font-medium dark:text-neutral-white">
          Manage your entire community in a single system
        </h1>
        <p className="font-regular text-body-2 text-neutral-grey mt-1 dark:text-neutral-white">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 space-y-4 lg:flex-row lg:justify-around">
        <div className="p-6 text-center lg:w-1/6">
          <Image src={Icon1} alt="Icon1" className="mx-auto" />
          <h2 className="text-headline-3 text-neutral-d_grey font-medium mb-1 dark:text-neutral-white">
            Membership Organisations
          </h2>
          <p className="font-regular text-body-3 text-neutral-grey text-center dark:text-neutral-white">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="p-6 text-center lg:w-1/6">
          <Image src={Icon2} alt="Icon2" className="mx-auto" />
          <h2 className="text-headline-3 text-neutral-d_grey font-medium mb-1 dark:text-neutral-white">
            National Associations
          </h2>
          <p className="font-regular text-body-3 text-neutral-grey text-center dark:text-neutral-white">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="p-6 text-center lg:w-1/6">
          <Image src={Icon3} alt="Icon3" className="mx-auto mb-4" />
          <h2 className="text-2xl text-neutral-d_grey font-medium mb-1 leading-tight max-w-lg dark:text-neutral-white">
            Clubs And Groups
          </h2>
          <p className="font-regular text-body-3 text-neutral-grey text-center dark:text-neutral-white">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center p-8 lg:flex-row lg:space-x-16">
        <div className="flex justify-center lg:w-1/4">
          <Image src={Frame35} alt="Icon3" />
        </div>

        <div className="flex-1 max-w-lg">
          <h1 className="text-neutral-d_grey text-headline-2 text-center mb-4 font-medium lg:text-left dark:text-neutral-white">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-neutral-grey font-regular text-body-3 text-center mb-6 lg:text-left dark:text-neutral-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button label="Learn more" size="large" />
          </div>
        </div>
      </div>
    </>
  );
}
