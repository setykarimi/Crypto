import SectionsTitle from "common/titles/titleSections";
import onlinePricesBg from "images/backgrounds/onlinePricesBg.png";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function OnlinePricesTable() {
  return (
    <div
      className="lg:mt-24 mt-12 pb-24 pt-24"
      style={{
        background: `url(${onlinePricesBg}) no-repeat center top`,
        backgroundSize: "cover",
      }}
    >
      <section className="inner-container mx-auto md:px-0 px-2">
        {/* Title Section*/}
        <SectionsTitle number={2} title="آنلاین" subTitle="قیمت‌های">
          <button className="border border-blue-primary text-blue-primary rounded-lg flex items-center gap-2 p-2 h-fit md:text-sm text-xs font-semiBold">
            <span>تمامی قیمت‌ها</span>
            <BsArrowLeft />
          </button>
        </SectionsTitle>
        {/* End Title Section*/}
      </section>
    </div>
  );
}
