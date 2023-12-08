import SectionsTitle from "@common/titles/section";
import { img } from "@data";
import { useCoins } from "@hooks/use-coins";
import { numberSeprator } from "@utils/numberSeprator";

export default function CryptoMarketCards() {
  return (
    <div
      className="lg:mt-24 mt-12 pb-12"
      style={{
        background: `url(${img.crypto_market_bg}) no-repeat center right`,
        backgroundSize: "contain",
      }}
    >
      <section className="inner-container mx-auto md:px-0 px-2">
        {/* Title Section*/}
        <SectionsTitle number={1} title="کریپتر" subTitle="بازارهای">
          <button className="bg-blue-primary rounded-lg flex items-center gap-2 p-2 h-fit md:text-sm text-xs font-semiBold">
            <span className="bg-white text-blue-700 px-2 py-1 rounded-md">
              دلار $
            </span>
            <span className="text-white">تتر USDT</span>
          </button>
        </SectionsTitle>
        {/* End Title Section*/}

        {/* Cards */}
        <section className="grid md:grid-cols-4 grid-cols-2 xl:gap-12 lg:gap-8 gap-4">
          <Cards />
        </section>
        {/* End Card Section */}
      </section>
    </div>
  );
}

const Cards = () => {
  const { data: coins, isLoading } = useCoins("/coins?&limit=4&page=2");

  if (isLoading) {
    return (
      <>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </>
    );
  }

  return coins?.result?.map((coin: any) => (
    <Card
      key={coin.name}
      icon={coin.icon}
      name={coin.name}
      price={numberSeprator(Math.round(coin.price))}
      priceChange1h={coin.priceChange1h}
      priceChange1d={coin.priceChange1d}
    />
  ));
};

const Card = (props: any) => {
  const { icon, name, price, priceChange1h, priceChange1d } = props;
  return (
    <div className="bg-blue-primary lg:p-8 p-4 lg:rounded-[3rem] rounded-3xl flex flex-col items-center lg:gap-4 gap-2">
      <img
        src={icon}
        className="lg:h-24 h-16 lg:w-24 w-16 rounded-full"
        alt="icon"
      />
      <span className="text-orange-primary gap-4 font-bold text-lg block">
        {name}
      </span>
      <span className="text-white block lg:text-xl text-lg lg:font-bold">
        {price} دلار
      </span>
      <span className="text-green-primary block lg:font-bold lg:text-base text-sm ltr">
        {priceChange1h} ({priceChange1d})
      </span>
    </div>
  );
};

const LoadingCard = () => {
  return (
    <div className="bg-blue-primary lg:p-8 p-4 lg:rounded-[3rem] rounded-3xl flex flex-col items-center lg:gap-8 gap-4">
      <div className="lg:h-24 h-16 lg:w-24 w-16 rounded-full bg-gray-100" />
      <span className="block bg-gray-100 h-2 w-2/3 rounded-lg"></span>
      <span className="block bg-gray-100 h-2 w-2/3 rounded-lg"></span>
      <span className="block bg-gray-100 h-2 w-2/3 rounded-lg"></span>
    </div>
  );
};
