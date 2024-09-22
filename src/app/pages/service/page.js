import React from "react";
import { FaCheck } from "react-icons/fa";
import Phones from "/public/image/Phones.png";
import Image from "next/image";

export default function Service() {
  return (
    <div className="mt-20 mb-[76px] px-[16px] md:px-[49px] md:mb-[159px] lg:px-[161px] lg:mb-[120px]">
      <div>
        <h4 className="text-h5 text-black text-center md:text-h4 md:font-semibold">
          ABOUT OUR APP
        </h4>

        <div className="text-center mx-auto mt-6 px-[22px] md:px-[120px] lg:px-[258px]">
          <p className="text-h7 text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae.
          </p>
          <p className="text-h7 text-gray hidden lg:inline">
            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
            tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
            nunc libero urna, feugiat.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-around mt-6 space-y-6 md:flex-row">
        <div>
          {" "}
          <Image
            src={Phones}
            alt="Phones"
            className="w-[238px] h-[359px] lg:w-[386px] lg:h-[526px]"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center w-[343px] h-[110px] p-6 rounded shadow-lg md:w-[391px] md:p-4 lg:w-[570px] lg:h-[160px] lg:p-10   ">
            <div className="flex space-x-4">
              <div className="inline-block w-6 h-6 bg-royalBlue rounded-full flex items-center justify-center p-1">
                <FaCheck className="text-white" />
              </div>

              <div>
                <h6 class="text-h6 text-black">Creative design</h6>
                <p className="text-h7 text-gray hidden lg:block">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
                <p className="text-h7 text-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-[343px] h-[110px] p-6 rounded shadow-lg md:w-[391px] md:p-4 lg:w-[570px] lg:h-[160px] lg:p-10   ">
            <div className="flex space-x-4">
              <div className="inline-block w-6 h-6 bg-royalBlue rounded-full flex items-center justify-center p-1">
                <FaCheck className="text-white" />
              </div>

              <div>
                <h6 class="text-h6 text-black">Creative design</h6>
                <p className="text-h7 text-gray block hidden lg:block">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
                <p className="text-h7 text-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-[343px] h-[110px] p-6 rounded shadow-lg md:w-[391px] md:p-4 lg:w-[570px] lg:h-[160px] lg:p-10   ">
            <div className="space-x-4">
              <div className="flex justify-start items-center">
                <div className="inline-block w-6 h-6 bg-royalBlue rounded-full flex items-center justify-center p-1">
                  <FaCheck className="text-white" />
                </div>
                <h6 class="text-h6 text-black ml-[17px]">Creative design</h6>
              </div>

              <div>
                <p className="text-h7 text-gray block hidden lg:block ml-[25px]">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
