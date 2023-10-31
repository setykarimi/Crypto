import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import { TbSwitchVertical } from "react-icons/tb";

export default function Calculator() {
  return (
    <div
      className="border-2 border-blue-300 rounded-3xl px-4 py-6 lg:w-7/12 md:w-9/12 w-full mx-auto flex flex-col relative z-1"
      style={{
        background:
          "linear-gradient(318deg, #DFE6FF -0.59%, #E7ECFF 21.43%, rgba(235, 239, 255, 0.00) 110.69%)",
      }}
    >
      <div className="flex justify-between text-blue-primary items-center gap-16">
        <h4 className="font-bold text-xl ml-auto">مبادله</h4>
        <RiSettings5Fill size={30} />
      </div>

      {/* Start مبلغ پرداختی */}
      <div className="mt-4">
        <label className="text-blue-primary font-semiBold mb-2 text-sm block">
          مبلغ پرداختی
        </label>
        <div className="bg-blue-200 py-1 px-4 rounded-lg flex gap-4">
          <input
            className="bg-transparent w-2/3 py-2 text-left outline-none placeholder:text-xs placeholder:text-gray-300 placeholder:text-right text-gray-400 text-sm ltr"
            placeholder="مبلغ مورد نظر خود را وارد کنید"
            type="number"
          />
          <select className="w-1/3 bg-transparent outline-none">
            <option>select</option>
          </select>
        </div>
      </div>
      {/* End مبلغ پرداختی */}

      {/* Start Switch button */}
      <button className="my-2 mx-auto w-fit">
        <TbSwitchVertical className="text-green-primary" size={30} />
      </button>
      {/* End Switch button */}

      {/* Start مبلغ دریافتی */}
      <div>
        <label className="text-blue-primary font-semiBold mb-2 text-sm block">
          مبلغ دریافتی
        </label>
        <div className="bg-blue-200 py-1 px-4 rounded-lg flex gap-4">
          <input
            className="bg-transparent w-2/3 py-2 text-left outline-none placeholder:text-xs placeholder:text-gray-300 placeholder:text-right text-gray-400 text-sm ltr"
            type="number"
          />
          <select className="w-1/3 bg-transparent outline-none">
            <option>select</option>
          </select>
        </div>
      </div>
      {/* End مبلغ دریافتی */}

      <div className="flex gap-2 justify-center text-sm mt-2 text-blue-primary">
        <span>۰.۰۰۱۰۲۰۴۲۱ تتر</span>
        <HiOutlineSwitchHorizontal />
        <span>۱ تومان</span>
      </div>

      <button className="bg-red-700 text-white rounded-xl py-2 font-bold mt-4">
        تبادل کن
      </button>
    </div>
  );
}
