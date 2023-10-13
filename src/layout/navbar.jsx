import React from "react";
import Logo from '../assets/logo.svg'

export default function Navbar() {
  const menus = [
    {
      title: "صفحه اصلی",
      to: "",
    },
    {
      title: "خرید و فروش ارز دیجیتال",
      to: "",
    },
    {
      title: "قیمت‌های آنلاین",
      to: "",
    },
    {
      title: "مقالات آموزشی",
      to: "",
    },
    {
      title: "وبلاگ",
      to: "",
    },
    {
      title: "ارتباط با ما",
      to: "",
    },
  ];

  return <div className="max-w-[1220px] mx-auto bg-black py-4 px-8 mt-4 rounded-xl">
    <div className="logo">
        <img src={Logo} alt="logo" />
    </div>
    <div className="flex items-center gap-4">
        {menus.map(({title, to})=> <Link to={to}>{title}</Link>)}
    </div>
  </div>;
}
