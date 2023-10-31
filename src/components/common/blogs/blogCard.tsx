import image from "images/blog/blog1.png";
import { FaPen } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { HiEye } from "react-icons/hi";

export default function BlogCard() {
  return (
    <div
      className="bg-white rounded-xl flex relative"
      style={{
        boxShadow:
          "11px 11px 30px -5px rgba(6, 102, 151, 0.10), -6px -6px 26px 0px rgba(255, 255, 255, 0.03)",
      }}
    >
      <div className="py-4 pr-4 md:pl-12 p-4 flex flex-col">
        <div className="flex gap-4">
          <img
            src={image}
            alt="blog"
            className="md:w-36 w-24 md:h-36 h-34 object-cover rounded-xl"
          />
          <div>
            <span className="block font-extraBold text-red-primary md:text-xl text-base mb-2">
              آموزش نوسان‌گیری در کریپتر
            </span>
            <p className="text-gray-400 font-semiBold text-justify md:text-base text-sm">
              امروزه بازار ارز دیجیتال از جذاب‌ترین بازارها برای سرمایه‌گذاری
              است. برخی افراد در این بازار سودهای زیادی را ....
            </p>
          </div>
        </div>
        <div className="flex md:gap-12 items-center md:mr-auto md:-mt-6 mt-2 md:justify-end justify-between">
          <div className="flex gap-2 items-center">
            <FaPen className="text-gray-400" size={16} />
            <span className="text-sm text-gray-400 font-semiBold">
              سید حسین یعقوبی
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <BsCalendarDateFill className="text-gray-400" size={16} />
            <span className="text-sm text-gray-400 font-semiBold">
              ۱۴۰۲/۰۱/۱۳
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <HiEye className="text-gray-400" size={16} />
            <span className="text-sm text-gray-400 font-semiBold">245</span>
          </div>
        </div>
      </div>
      <div className="md:h-3/4 h-[2px] m-auto lg:w-2 md:w-1 w-11/12 rounded-full bg-red-primary md:static absolute top-0 right-0 left-0"></div>
    </div>
  );
}
