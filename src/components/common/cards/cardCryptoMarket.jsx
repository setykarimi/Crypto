import SectionsTitle from "common/titles/titleSections";
import cryptoMarketBg from "images/backgrounds/cryptoMarketBg.svg";
import React from "react";

export default function CryptoMarketCards() {
  return (
    <div
      className="mt-24 pb-24"
      style={{
        background: `url(${cryptoMarketBg}) no-repeat center right`,
        backgroundSize: "contain",
      }}
    >
      <section className="inner-container mx-auto md:px-0 px-2">
        {/* Title Section*/}
        <SectionsTitle number={1} title="کریپتر" subTitle="بازارهای">
          <button className="bg-blue-primary rounded-lg flex items-center gap-2 p-2 h-fit md:text-sm text-xs font-semiBold">
            <span className="bg-white text-blue-700 px-2 py-1 rounded-md">
              ریال IR
            </span>
            <span className="text-white">تتر USDT</span>
          </button>
        </SectionsTitle>
        {/* End Title Section*/}

        {/* Cards */}
        <section className="grid md:grid-cols-4 grid-cols-2 xl:gap-12 lg:gap-8 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        {/* End Card Section */}
      </section>
    </div>
  );
}

const Card = () => {
  return (
    <div className="bg-blue-primary lg:p-8 p-4 lg:rounded-[3rem] rounded-3xl flex flex-col items-center lg:gap-4 gap-2">
      <div className="lg:h-24 h-16 lg:w-24 w-16 rounded-full bg-white"></div>
      <div className="text-orange-primary flex gap-4 font-bold text-lg">
        <span className="blocl">کاردانو</span>
        <span className="block">ADA</span>
      </div>
      <span className="text-white block lg:text-xl text-lg lg:font-bold">
        98,254 ریال
      </span>
      <span className="text-green-primary block lg:font-bold lg:text-base text-sm">
        0.25 (150)
      </span>
    </div>
  );
};
