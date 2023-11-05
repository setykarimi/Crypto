import { AiFillEye } from "react-icons/ai";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ArticleCardInitValue } from "./initialValue";

export default function ArticleCard({ article }: ArticleCardInitValue) {
  return (
    <div className="md:p-8 p-2 rounded-xl bg-white flex flex-col md:gap-6 gap-3 items-center">
      <img
        src={article.img}
        alt="learning article"
        className="rounded-xl"
      />
      <span className="text-orange-primary font-semiBold md:text-xl text-lg block mx-auto text-center">
        {article.title}
      </span>
      <Link
        to="/"
        className="bg-blue-primary text-white md:text-lg py-2 rounded-lg block text-center w-full"
      >
        بزن بریم
      </Link>

      <div className="flex justify-between md:gap-4 gap-2 items-center w-full">
        <div className="text-gray-400 flex items-center">
          <PiPencilSimpleLineFill className="block ml-1" />
          <span className="md:font-bold md:text-base text-xs">{article.author} مقاله</span>
        </div>
        <div className="text-gray-400 flex items-center">
          <AiFillEye className="block ml-1" />
          <span className="md:font-bold md:text-base text-xs">{article.view} بازدید</span>
        </div>
      </div>
    </div>
  );
}
