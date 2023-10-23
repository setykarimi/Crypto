import React from "react";
import cryptoMarketBg from "images/backgrounds/cryptoMarketBg.svg";
import SectionsTitle from "common/titles/titleSections";

export default function Blogs() {
  return (
    <div
      className="lg:mt-24 mt-12 pb-12"
      style={{
        background: `url(${cryptoMarketBg}) no-repeat center right`,
        backgroundSize: "contain",
      }}
    >
      <section className="inner-container mx-auto md:px-0 px-2">
        {/* Title Section*/}
        <SectionsTitle number={5} title="کریپتر" subTitle="مقالات">
          <button className="bg-red-700 rounded-lg py-2 px-4 h-fit md:text-sm text-xs font-semiBold text-white">
            بیشتر ...
          </button>
        </SectionsTitle>
        {/* End Title Section*/}

        {/* Cards */}
        <section className="grid md:grid-cols-4 grid-cols-2 xl:gap-12 lg:gap-8 gap-4"></section>
      </section>
    </div>
  );
}
