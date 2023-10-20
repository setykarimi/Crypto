import SectionsTitle from "common/titles/titleSections";
import onlinePricesBg from "images/backgrounds/onlinePricesBg.png";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function OnlinePricesTable() {
  return (
    <div
      className="lg:mt-24 mt-12 pb-24 md:pt-24 pt-8 md:w-full w-[95%] mx-auto md:rounded-none rounded-3xl"
      style={{
        background: `url(${onlinePricesBg}) no-repeat center top`,
        backgroundSize: "cover",
      }}
    >
      <section className="inner-container mx-auto px-0">
        {/* Title Section*/}
        <SectionsTitle number={2} title="آنلاین" subTitle="قیمت‌های">
          <button className="border border-blue-primary text-blue-primary rounded-lg flex items-center gap-2 p-2 h-fit md:text-sm text-xs font-semiBold">
            <span>تمامی قیمت‌ها</span>
            <BsArrowLeft />
          </button>
        </SectionsTitle>
        {/* End Title Section*/}

        <div className="grid md:grid-cols-5 grid-cols-3 bg-white rounded-3xl">
          <span className="text-center block text-gray-400 font-semibold text-lg py-4 border-b border-b-blue-100">
            رمز ارزها
          </span>
          <span className="text-center block text-gray-400 font-semibold text-lg py-4 border-b border-b-blue-100">
            قیمت لحظه‌ای
          </span>
          <span className="text-center md:block hidden text-gray-400 font-semibold text-lg py-4 border-b border-b-blue-100">
            حجم در ۳۴ ساعت
          </span>
          <span className="text-center md:block hidden text-gray-400 font-semibold text-lg py-4 border-b border-b-blue-100">
            تغییرات
          </span>
          <span className="text-center block text-gray-400 font-semibold text-lg py-4 border-b border-b-blue-100">
            معامله
          </span>
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
      </section>
    </div>
  );
}

const TableRow = () => {
  return (
    <div className="md:col-span-5 col-span-3 grid md:grid-cols-5 grid-cols-3 border-b border-b-blue-400">
      <div className="flex justify-center items-center md:py-4 py-2">
        <div className="bg-blue-400 md:w-16 w-10 md:h-16 h-10 rounded-full"></div>
      </div>
      <span className="text-blue-primary font-bold text-center block md:py-4 py-2 my-auto">
        98,254 ریال
      </span>
      <span className="text-gray-900 font-bold text-center md:block hidden md:py-4 py-2 my-auto">
        525.214.214.214
      </span>
      <span className="text-green-primary font-bold text-center md:block hidden md:py-4 py-2 my-auto">
        0.25 (150)
      </span>
      <button className="m-auto text-white bg-blue-500 rounded-xl py-2 px-3 font-medium md:text-base text-sm">
        خرید / فروش
      </button>
    </div>
  );
};
