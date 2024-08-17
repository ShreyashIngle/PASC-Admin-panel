import { Switch, Heading } from "../../components";
import React from "react";

export default function ContainerFifteenPage() {
  return (
    <div className="flex w-full flex-col items-center border border-solid border-white-a700_01 bg-white-a700_01 py-[38px] shadow-xs sm:py-5">
      <div className="mx-auto mb-1 flex w-full max-w-[890px] flex-col items-center gap-3.5 md:px-5">
        <Heading as="h1" className="!text-gray-600">
          Page Management
        </Heading>
        <div className="flex flex-col gap-3 self-stretch">
          <div className="flex items-start justify-between gap-5 rounded-[18px] border border-solid border-gray-100 bg-white-a700_01 p-[22px] shadow-xs sm:p-5">
            <Heading as="h2" className="ml-2 self-end md:ml-0">
              Homepage
            </Heading>
            <Switch value={true} />
          </div>
          <div className="flex items-center justify-between gap-5 rounded-[42px] border border-solid border-gray-100 bg-white-a700_01 px-[22px] py-6 shadow-xs sm:p-5">
            <Heading as="h3" className="ml-1.5 self-end md:ml-0">
              About Us
            </Heading>
            <Switch value={true} />
          </div>
          <div className="flex items-center justify-between gap-5 rounded-[18px] border border-solid border-gray-100 bg-white-a700_01 p-[22px] shadow-xs sm:p-5">
            <Heading as="h4" className="ml-1.5 self-end md:ml-0">
              Services
            </Heading>
            <Switch size="sm" value={true} />
          </div>
          <div className="flex items-center justify-between gap-5 rounded-[14px] border border-solid border-gray-100 bg-white-a700_01 px-[22px] py-6 shadow-xs sm:p-5">
            <Heading as="h5" className="ml-1.5 self-end md:ml-0">
              Contact
            </Heading>
            <Switch value={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
