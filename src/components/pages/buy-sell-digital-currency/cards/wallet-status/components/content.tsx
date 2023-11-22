import { IoMdArrowRoundUp } from "react-icons/io";

export default function MyWalletStatusContent() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid md:grid-cols-3 gap-2 justify-start items-start">
        <div>
          <span className="text-blue-500 font-black text-lg text-center block">
            وضعیت حساب:
          </span>
        </div>
        <div>
          <span className="block text-center text-sm whitespace-nowrap text-blue-700 font-bold">
            موجودی کل حساب به تومان:
          </span>
          <span className="block text-center text-sm text-blue-700 font-extraBold">
            ۱.۲۵۴.۶۴۸.۰۰۰
          </span>
        </div>
        <div className="flex justify-end">
          <div className="w-fit bg-blue-50 text-blue-primary px-2 py-1 rounded-full">
            <select className="text-xs bg-transparent font-semiBold">
              <option>۲۴ ساعت اخیر</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="flex">
          <div>
          <span className="block text-center text-green-primary text-sm font-semiBold">
            میزان سود و زیان کل
          </span>
          <span className="block text-center text-green-primary text-sm font-bold">
            ۲۰.۰۰۰ تومان
          </span>
          </div>
          <IoMdArrowRoundUp  />

        </div>
        <div>
          <span className="block text-center text-red-500 text-sm font-semiBold">
            میزان ضرر
          </span>
          <span className="block text-center text-red-300 text-sm font-bold">
            ۵۳.۴۸۰ تومان
          </span>
        </div>
        <div className="">
          <span className="block text-center text-green-primary text-sm font-semiBold">
            میزان سود
          </span>
          <span className="block text-center text-green-primary text-sm font-bold">
            ۷۸.۴۸۰ تومان
          </span>
        </div>
      </div>
    </div>
  );
}
