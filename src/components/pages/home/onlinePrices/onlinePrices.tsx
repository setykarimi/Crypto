import { OnlinePricesTable } from "@common/table/onlinePrices";
import SectionsTitle from "@common/titles/titleSections";
import { img } from "@data";
import { BsArrowLeft } from "react-icons/bs";

export default function OnlinePrices() {
  return (
    <div
      className="lg:mt-24 mt-12 pb-12 md:pt-24 pt-8 md:w-full w-[95%] mx-auto md:rounded-none rounded-3xl"
      style={{
        background: `url(${img.online_prices_bg}) no-repeat center top`,
        backgroundSize: "cover",
      }}
    >
      <section className="inner-container mx-auto px-0">
        {/* Title Section*/}
        <SectionsTitle number={2} title="آنلاین" subTitle="قیمت‌های">
          <button className="border border-blue-primary text-blue-primary rounded-lg flex items-center gap-2 p-2 h-fit md:text-sm text-xs font-semiBold">
            <span>تمامی قیمت‌ها</span>
            <BsArrowLeft />
          </button>
        </SectionsTitle>
        {/* End Title Section*/}

        <OnlinePricesTable />
      </section>
    </div>
  );
}
