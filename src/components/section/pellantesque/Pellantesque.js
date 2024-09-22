import React from "react";
import Button from "../../ui/button/Button";

export default function Pellantesque() {
  return (
    <div className="flex flex-col justify-center bg-neutral-silver">
      <h1 className="text-center font-medium text-headline-1 text-neutral-black mb-8 lg:w-1/2 mx-auto dark:text-neutral-white">
        Pellentesque suscipit fringilla libero eu.
      </h1>
      <div className="flex justify-center mb-8">
        <Button label="Get a demo &rarr;" size="large" />
      </div>
    </div>
  );
}
