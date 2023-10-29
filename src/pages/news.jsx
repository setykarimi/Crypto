import BlogCard from "common/blogs/blogCard";
import TitlePage from "common/titles/titlePage";
import BannerNews from "pagesComp/news/banner/bannerNews";
import InputFilter from "pagesComp/news/input/inputFilter";
import NewsContent from "pagesComp/news/newsContent/news";
import React from "react";

export default function NewsPage() {
  return (
    <>
      <BannerNews />
      <section className="inner-container mx-auto px-0 grid md:grid-cols-2 gap-8 mt-20 items-center">
        <TitlePage />
        <InputFilter />
      </section>
      <NewsContent />
    </>
  );
}
