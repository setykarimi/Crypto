import { FaAddressBook } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="inner-container mx-auto bg-orange-primary p-8 rounded-xl lg:mt-24 mt-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="address">
          <div className="title flex gap-2 items-center text-blue-900 ">
            <FaAddressBook />
            <span className="lg:text-2xl text-xl block font-bold">آدرس:</span>
          </div>
          <p className="font-semiBold mr-6 mt-2">
          تهران - بهشتی - میرزای شیرازی - نبش آزادگان
          </p>
        </div>
        <div className="email">
          <div className="title flex gap-2 items-center text-blue-900 ">
            <FaAddressBook />
            <span className="lg:text-2xl text-xl block font-bold">ایمیل:</span>
          </div>
          <p className="font-semiBold mr-6 mt-2 text-left">
            <span className="block">setykarimi80@gmail.com</span>
          </p>
        </div>
        <div className="phone_number">
          <div className="title flex gap-2 items-center text-blue-900 ">
            <FaAddressBook />
            <span className="lg:text-2xl text-xl block font-bold">شماره تماس:</span>
          </div>
          <p className="font-semiBold mr-6 mt-2 text-left">
            <a href="tel:09190979722" className="block text-left ltr">+98 9190979722</a>
          </p>
        </div>
      </div>
    </div>
  );
}
