import TitlePage from "@common/titles/titlePage";
import { static_data } from "@data";
import BannerNews from "@pagesComp/news/banner/bannerNews";
import InputFilter from "@pagesComp/news/input/inputFilter";
import NewsContent from "@pagesComp/news/newsContent/news";
import { useState } from "react";

export default function NewsPage() {
  const [filteredNews, setFilteredNews] = useState<
    [] | static_data.news_init_type.NewsInitType
  >([]);

  return (
    <>
      <BannerNews />
      <section className="inner-container mx-auto px-0 grid md:grid-cols-2 gap-8 mt-20 items-center">
        <TitlePage />
        <InputFilter setFilteredNews={setFilteredNews} />
      </section>
      <NewsContent
        news={filteredNews.length ? filteredNews : static_data.news_data.news}
      />
    </>
  );
}
