import { img } from "@data";
import { useState } from "react";
import { BsHeadphones, BsPersonFill } from "react-icons/bs";
import { FaHeadphones, FaSignOutAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { HiHome, HiMenu } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  // Show menu state
  const [showMenu, setShowMenu] = useState<Boolean | null>(null);
  const showMenuHandler = () => {
    setShowMenu(true);
  };
  const closeMenuHandler = () => {
    setShowMenu(false);
  };
  // menus list
  const menus = [
    {
      title: "صفحه اصلی",
      to: "/",
      icon: <HiHome size={20} />,
    },
    {
      title: "قیمت‌های آنلاین",
      to: "/online-prices",
      icon: <MdInsertChart size={20} />,
    },
    {
      title: "مقالات آموزشی",
      to: "/learning-articles",
      icon: <PiPencilSimpleLineFill size={20} />,
    },
    {
      title: "اخبار",
      to: "/news",
      icon: <FaNewspaper size={20} />,
    },
    {
      title: "ارتباط با ما",
      to: "/contact-us",
      icon: <FaHeadphones size={20} />,
    },
  ];

  return (
    <div
      className="inner-container mx-auto py-4 lg:px-8 px-4 mt-4 rounded-2xl flex gap-8 items-center bg-white z-10 sticky top-4"
      style={{
        boxShadow: "0px 12px 25px -9px rgba(83, 83, 83, 0.15)",
      }}
    >
      <button className="lg:hidden block" onClick={showMenuHandler}>
        <HiMenu className="text-blue-800" size={22} />
      </button>
      <Link to="/" className="logo flex lg:mr-0 mr-auto lg:ml-0 -ml-10">
        <img src={img.logo_main} alt="logo" className="lg:w-auto w-20" />
      </Link>

      <div
        className={`${
          showMenu == true
            ? "flex absolute bg-white -right-[2.6vw] left-0 p-4 h-[100vh] -top-[2.6vh] w-[100vw] items-center justify-center"
            : "hidden lg:block"
        } `}
      >
        <div className="flex lg:flex-row flex-col gap-4 overflow-hidden lg:w-auto w-54">
          <button onClick={closeMenuHandler} className="lg:hidden block mb-8">
            <FaSignOutAlt className="text-blue-primary" size={32} />
          </button>
          {menus.map(({ title, to, icon }) => (
            <NavLink
              key={title}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-primary border-b-2 border-b-blue-primary font-bold pb-1 flex gap-2 items-center lg:max-w-auto max-w-32 w-fit text-right whitespace-nowrap"
                  : "text-gray-300 text-14 pb-1 flex gap-2 items-center lg:max-w-auto max-w-32 w-fit text-right whitespace-nowrap"
              }
              to={to}
              onClick={closeMenuHandler}
            >
              <span className="lg:hidden block">{icon}</span>
              {title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mr-auto">
        <Link
          to="/buy-sell/digital-currency"
          className="text-14 text-white bg-blue-primary py-2 lg:px-4 px-2 rounded-lg flex items-center gap-2"
        >
          <span className="lg:block hidden">ورود / ثبت نام</span>
          <BsPersonFill size={20} />
        </Link>
        <Link
          to=""
          className="text-14 text-white bg-red-primary py-2 lg:px-4 px-2 rounded-lg flex items-center gap-2"
        >
          <span className="lg:block hidden">پشتیبانی</span>
          <BsHeadphones size={20} />
        </Link>
      </div>
    </div>
  );
}
