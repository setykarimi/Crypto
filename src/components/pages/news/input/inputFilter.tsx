import { BsFilterLeft } from "react-icons/bs";
import { RiSearch2Fill } from "react-icons/ri";

export default function InputFilter() {
  return (
    <div className="bg-white shadow-md py-2 pr-4 pl-3 rounded-xl focus-within:shadow-lg transition-all flex items-center gap-2 md:w-3/4 mr-auto w-full">
      <RiSearch2Fill className="text-gray-100" size={25} />
      <input
        placeholder="اخبار رو اینجا پیدا کن ..."
        className="placeholder:text-gray-100 w-full py-2 outline-none placeholder:text-sm"
      />
      <span className="block mr-auto bg-blue-primary p-1 rounded-lg text-white">
        <BsFilterLeft size={25} />
      </span>
    </div>
  );
}
