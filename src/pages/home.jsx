import Blogs from "common/blogs/blogs";
import CryptoMarketCards from "common/cards/cardCryptoMarket";
import OnlinePricesTable from "common/table/tableOnlinePrices";
import HomeBanner from "pagesComp/home/banner/bannerHome";
import BannerWhyCrypto from "pagesComp/home/banner/bannerWhyCrypto";
import OnlineCalculator from "pagesComp/home/calculator/onlineCalculator";
import CryptoContent from "pagesComp/home/content/cryptoContent";
import DigitalWallet from "pagesComp/home/content/digitalWallet";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <CryptoMarketCards />
      <OnlinePricesTable />
      <BannerWhyCrypto />
      <OnlineCalculator />
      <CryptoContent />
      <Blogs />
      <DigitalWallet />
    </>
  );
}
