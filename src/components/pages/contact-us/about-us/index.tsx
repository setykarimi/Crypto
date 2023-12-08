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
            تهران - خیابان بهشتی - خیابان قائم مقام فراهانی - خیابان مشاهیر
          </p>
        </div>
        <div className="email">
          <div className="title flex gap-2 items-center text-blue-900 ">
            <FaAddressBook />
            <span className="lg:text-2xl text-xl block font-bold">ایمیل:</span>
          </div>
          <p className="font-semiBold mr-6 mt-2 text-left">
            <span className="block">crypter@gmail.com</span>
            <span className="block mt-1">crypter@info.com</span>
          </p>
        </div>
        <div className="phone_number">
          <div className="title flex gap-2 items-center text-blue-900 ">
            <FaAddressBook />
            <span className="lg:text-2xl text-xl block font-bold">شماره تماس:</span>
          </div>
          <p className="font-semiBold mr-6 mt-2 text-left">
            <span className="block">011-45875</span>
            <span className="block mt-1">011-954566</span>
          </p>
        </div>
      </div>
    </div>
  );
}
