import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const menus = [
    {
      title: "صفحه اصلی",
      to: "/",
    },
    {
      title: "خرید و فروش ارز دیجیتال",
      to: "/example1",
    },
    {
      title: "قیمت‌های آنلاین",
      to: "/example2",
    },
    {
      title: "مقالات آموزشی",
      to: "/example3",
    },
    {
      title: "وبلاگ",
      to: "/example4",
    },
    {
      title: "ارتباط با ما",
      to: "/example5",
    },
  ];

  return (
    <div className="max-w-[1220px] mx-auto py-4 px-8 mt-4 rounded-2xl flex gap-8 items-center bg-white">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex items-center gap-4">
        {menus.map(({ title, to }) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-primary border-b-2 border-b-blue-primary font-bold pb-1"
                : "text-gray-300 text-14 pb-1"
            }
            to={to}
          >
            {title}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-4 mr-auto">
        <Link
          to=""
          className="text-14 text-white bg-blue-primary py-2 px-4 rounded-lg"
        >
          ورود / ثبت نام
        </Link>
        <Link
          to=""
          className="text-14 text-white bg-red-primary py-2 px-4 rounded-lg"
        >
          پشتیبانی
        </Link>
      </div>
    </div>
  );
}
