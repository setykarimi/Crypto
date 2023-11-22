import WalletStatus from "@pagesComp/buy-sell-digital-currency/cards/wallet-status";
import MyInfoCard from "@pagesComp/buy-sell-digital-currency/cards/my-info";

export default function BuySellDigitalCurrency() {
  return (
    <div className="inner-container mx-auto mt-8 grid lg:grid-cols-4 grid-cols-1 gap-4">
      <div>
        <MyInfoCard />
      </div>
      <div className="lg:col-span-3 col-span-1">
        <WalletStatus />
      </div>
    </div>
  );
}
