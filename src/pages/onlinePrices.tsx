import { OnlinePricesTable } from "@common/table/tableOnlinePrices";
import CryptoMarketCards from "@common/cards/cardCryptoMarket";

export default function OnlinePricesPage() {
  return (
    <>
      <CryptoMarketCards />
      <section className="inner-container mx-auto md:px-0 px-2">
        <OnlinePricesTable />
      </section>
    </>
  );
}
