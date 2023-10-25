import Blogs from "common/blogs/blogs";
import CryptoMarketCards from "common/cards/cardCryptoMarket";
import OnlinePricesTable from "common/table/tableOnlinePrices";
import HomeBanner from "pagesComp/home/banner/bannerHome";
import BannerWhyCrypto from "pagesComp/home/banner/bannerWhyCrypto";
import OnlineCalculator from "pagesComp/home/calculator/onlineCalculator";
import CryptoContent from "pagesComp/home/content/cryptoContent";
import DigitalWallet from "pagesComp/home/content/digitalWallet";
import SafeExchange from "pagesComp/home/content/safeExchange";
import Warning from "pagesComp/home/content/warning";

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
      <Warning />
      <SafeExchange />
    </>
  );
}
