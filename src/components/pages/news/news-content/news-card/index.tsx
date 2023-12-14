import { BsCalendarDateFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { HiEye } from "react-icons/hi";

interface PropsType {
  img: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  view: number;
}

export default function NewsCard(props: PropsType) {
  const { img, title, desc, author, date, view } = props;
  return (
    <div
      className="bg-white rounded-xl flex relative"
      style={{
        boxShadow:
          "11px 11px 30px -5px rgba(6, 102, 151, 0.10), -6px -6px 26px 0px rgba(255, 255, 255, 0.03)",
      }}
    >
      <div className="py-4 pr-4 md:pl-12 p-4 flex flex-col">
        <div className="grid md:grid-cols-8 grid-cols-9 gap-4">
          <div className="md:col-span-3 col-span-4">
            <img
              src={img ?? img}
              alt={title}
              className="md:h-36 h-28 w-full object-cover rounded-xl "
            />
          </div>
          <div className="col-span-5">
            <span className="block font-extraBold text-red-primary md:text-xl text-base mb-2">
              {title}
            </span>
            <p className="text-gray-400 font-semiBold text-justify md:text-base text-sm">
              {desc}
            </p>
          </div>
        </div>
        <div className="flex xl:gap-7 lg:gap-10 md:gap-7 items-center md:mr-auto md:-mt-6 mt-2 md:justify-end justify-between">
          <div className="flex gap-1 items-center">
            <FaPen
              className="text-gray-400 xl:block lg:hidden block"
              size={16}
            />
            <span className="text-sm text-gray-400 font-semiBold">
              {author}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <BsCalendarDateFill
              className="text-gray-400 xl:block lg:hidden block"
              size={16}
            />
            <span className="text-sm text-gray-400 font-semiBold">{date}</span>
          </div>
          <div className="flex gap-1 items-center">
            <HiEye
              className="text-gray-400 xl:block lg:hidden block"
              size={16}
            />
            <span className="text-sm text-gray-400 font-semiBold">{view}</span>
          </div>
        </div>
      </div>
      <div className="md:w-11/12 h-[2px] m-auto rounded-full bg-red-primary absolute top-0 right-0 left-0"></div>
    </div>
  );
}
