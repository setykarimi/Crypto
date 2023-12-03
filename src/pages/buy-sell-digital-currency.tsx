import Transactions from "@pagesComp/buy-sell-digital-currency/transactions";
import Calculator from "@common/calculator";
import LiveDemo from "@pagesComp/buy-sell-digital-currency/cards/live-demo";
import MyInfoCard from "@pagesComp/buy-sell-digital-currency/cards/my-info";
import WalletStatus from "@pagesComp/buy-sell-digital-currency/cards/wallet-status";
import WholeChart from "@pagesComp/buy-sell-digital-currency/chart";

export default function BuySellDigitalCurrency() {
  return (
    <div className="inner-container mx-auto mt-8 grid lg:grid-cols-4 grid-cols-1 gap-4">
      <div className="flex flex-col gap-4">
        <MyInfoCard />
        <Calculator customClassName="bg-white p-4 rounded-2xl card-shadow w-full relative flex flex-col"/>
        <Transactions />
      </div>
      <div className="lg:col-span-3 col-span-1">
        <WalletStatus />
        <WholeChart />
        <LiveDemo/>
      </div>
    </div>
  );
}
