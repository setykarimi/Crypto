import NewsSection from "@pagesComp/home/news/index";
import FrequentQuestions from "@common/accordion/frequentQuestions";
import Blogs from "@common/blogs/blogs";
import CryptoMarketCards from "@common/cards/cardCryptoMarket";
import HomeBanner from "@pagesComp/home/banner/bannerHome";
import BannerWhyCrypto from "@pagesComp/home/banner/bannerWhyCrypto";
import OnlineCalculator from "@pagesComp/home/calculator/onlineCalculator";
import CryptoContent from "@pagesComp/home/content/cryptoContent";
import DigitalWallet from "@pagesComp/home/content/digitalWallet";
import SafeExchange from "@pagesComp/home/content/safeExchange";
import Warning from "@pagesComp/home/content/warning";
import OnlinePrices from "@pagesComp/home/onlinePrices/onlinePrices";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <CryptoMarketCards />
      <OnlinePrices />
      <BannerWhyCrypto />
      <OnlineCalculator />
      <CryptoContent />
      <Blogs />
      <DigitalWallet />
      <Warning />
      <NewsSection />
      <SafeExchange />
      <FrequentQuestions />
    </>
  );
}
