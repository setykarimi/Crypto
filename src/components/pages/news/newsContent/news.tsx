import NewsCard from "./newsCard";
import { NewsType } from "./type";

export default function NewsContent({ news }: any) {
  return (
    <section className="inner-container mx-auto px-0 grid lg:grid-cols-2 grid-cols-1 xl:gap-12 gap-8 lg:mt-24 mt-12 pb-12">
      {news.map(({ img, title, desc, author, date, view }: NewsType) => (
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
  );
}
