import SectionsTitle from "@common/titles/titleSections";
import { img, static_data } from "@data";
import NewsCard from "@pagesComp/news/newsContent/newsCard";
import { NewsType } from "@pagesComp/news/newsContent/type";
import { Link } from "react-router-dom";

export default function NewsSection() {
  return (
    <div
      className="lg:mt-24 mt-12 pb-12"
      style={{
        background: `url(${img.crypto_market_bg}) no-repeat center right`,
        backgroundSize: "contain",
      }}
    >
      <section className="inner-container mx-auto md:px-0 px-2">
        {/* Title Section*/}
        <SectionsTitle number={7} title="اخبار" subTitle="آخرین">
          <Link to="/news" className="bg-red-700 rounded-lg py-2 px-4 h-fit md:text-sm text-xs font-semiBold text-white">
            بیشتر ...
          </Link>
        </SectionsTitle>
        {/* End Title Section*/}

        {/* Cards */}
        <section className="grid lg:grid-cols-2 grid-cols-1 xl:gap-12 gap-8">
          {static_data.news_data.news
            .slice(0, 2)
            .map(({ img, title, desc, author, date, view }: NewsType) => (
              <NewsCard
                img={img}
                title={title}
                desc={desc}
                author={author}
                date={date}
                view={view}
              />
            ))}
        </section>
      </section>
    </div>
  );
}
