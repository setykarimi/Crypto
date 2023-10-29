import React from "react";
import NewsCard from "./newsCard";
import { newsData } from "@/staticData";

export default function NewsContent() {

  return (
    <section className="inner-container mx-auto px-0 grid lg:grid-cols-2 grid-cols-1 xl:gap-12 gap-8 lg:mt-24 mt-12 pb-12">
      {newsData.news.map(({img, title, desc, author, date, view})=> <NewsCard img={img} title={title} desc={desc} author={author} date={date} view={view}/>)}
    </section>
  );
}
