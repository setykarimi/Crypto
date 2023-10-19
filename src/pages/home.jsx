import CryptoMarketCards from "common/cards/cardCryptoMarket";
import OnlinePricesTable from "common/table/tableOnlinePrices";
import HomeBanner from "pagesComp/home/banner/bannerHome";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <CryptoMarketCards />
      <OnlinePricesTable />
    </>
  );
}
