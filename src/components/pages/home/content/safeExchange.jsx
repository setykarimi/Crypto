import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function SafeExchange() {
  return (
    <div className="bg-orange-primary lg:mt-24 mt-12 py-8 flex flex-col">
      <h4 className="font-extraBold text-4xl text-center text-white">
        با بهترین قیمت از امن‌ترین صرافی خرید کنید
      </h4>
      <button className="flex items-center gap-2 border border-white text-white rounded-lg py-2 px-4 mx-auto mt-6">
        همین حالا ثبت‌نام کن
        <BsArrowLeft />
      </button>
    </div>
  );
}
