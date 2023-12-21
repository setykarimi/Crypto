import TitlePage from "@common/titles/page";
import { static_data } from "@data";
import BannerNews from "@pagesComp/news/banner/banner-news";
import InputFilter from "@pagesComp/news/input/input-filter";
import NewsContent from "@pagesComp/news/news-content/news";
import { useState } from "react";

export default function NewsPage() {
  const [filteredNews, setFilteredNews] = useState<
    [] | static_data.news_init_type.NewsInitType
  >([]);

  return (
    <>
      <BannerNews />
      <section className="inner-container mx-auto md:px-0 px-2">
        <TitlePage />
        <InputFilter setFilteredNews={setFilteredNews} />

        <NewsContent
          news={filteredNews.length ? filteredNews : static_data.news_data.news}
        />
      </section>
    </>
  );
}
