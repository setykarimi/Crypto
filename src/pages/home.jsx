import Blogs from "common/blogs/blogs";
import CryptoMarketCards from "common/cards/cardCryptoMarket";
import OnlinePricesTable from "common/table/tableOnlinePrices";
import HomeBanner from "pagesComp/home/banner/bannerHome";
import BannerWhyCrypto from "pagesComp/home/banner/bannerWhyCrypto";
import OnlineCalculator from "pagesComp/home/calculator/onlineCalculator";
import Content from "pagesComp/home/content/content";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <CryptoMarketCards />
      <OnlinePricesTable />
      <BannerWhyCrypto />
      <OnlineCalculator />
      <Content />
      <Blogs />
    </>
  );
}
