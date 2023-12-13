import SectionsTitle from "@common/titles/section";
import { img } from "@data";
import BlogCard from "./blog-card";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div
      className="lg:mt-24 mt-12 pb-12  lg:px-8 md:px-4 px-2"
      style={{
        background: `url(${img.crypto_market_bg}) no-repeat center right`,
        backgroundSize: "contain",
      }}
    >
      <section>
        {/* Title Section*/}
        <SectionsTitle number={5} title="کریپتر" subTitle="مقالات">
          <Link to="/learning-articles" className="bg-red-700 rounded-lg py-2 px-4 h-fit md:text-sm text-xs font-semiBold text-white">
            بیشتر ...
          </Link>
        </SectionsTitle>
        {/* End Title Section*/}

        {/* Cards */}
        <section className="grid lg:grid-cols-2 grid-cols-1 xl:gap-12 gap-8">
          <BlogCard />
          <BlogCard />
        </section>
      </section>
    </div>
  );
}
