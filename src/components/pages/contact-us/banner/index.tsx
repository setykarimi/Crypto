import { img } from "@data";

export default function ContactUsBanner() {
  return (
    <div
      className="-mt-[5.6rem] z-0 relative xl:pb-28 pb-16 lg:px-0 px-4 pt-32"
      style={{
        background: `url(${img.contact_us_banner_bg}) no-repeat center bottom`,
        backgroundSize: "cover",
      }}
    >
      <div className="inner-container mx-auto">
        <img
          src={img.contact_us_banner_object}
          alt="contact us"
          className="mx-auto lg:w-fit md:w-[30rem] w-fit"
        />

        <div className="text-center relative gap-4 mt-10">
          <div className="flex items-center justify-center gap-16">
            <span className="font-semiBold text-2xl text-blue-primary">
              ارتباط با
            </span>
          </div>
          <h1 className="text-red-700 lg:font-bold font-black lg:text-7xl md:text-5xl text-3xl">
            کـــــــــــریـپـتـر
          </h1>
        </div>
        <button className="absolute lg:-bottom-14 md:-bottom-10 -bottom-9 mx-auto left-0 right-0 w-fit px-8 py-2">
          <img
            src={img.arrow_down_blue}
            alt="wallet"
            className="lg:w-fit md:w-16 w-12"
          />
        </button>
      </div>
    </div>
  );
}
