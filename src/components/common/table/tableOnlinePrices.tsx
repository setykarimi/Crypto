import { useCoins } from "@hooks/useCoins";
import { numberSeprator } from "@utils/numberSeprator";

export const OnlinePricesTable = () => {
  const { data: coins, error, isLoading } = useCoins("/coins?&limit=4");

  if (isLoading) {
    return (
      <div className="md:col-span-5 col-span-3 grid md:grid-cols-5 grid-cols-3 border-b border-b-blue-400 gap-16 px-8 py-4">
        <span className="md:w-16 w-10 md:h-16 h-10 rounded-full bg-gray-100 m-auto"></span>
        <span className="bg-gray-100 h-4 rounded-lg w-full m-auto"></span>
        <span className="bg-gray-100 h-4 rounded-lg w-full m-auto"></span>
        <span className="bg-gray-100 h-4 rounded-lg w-full m-auto"></span>
        <span className="bg-gray-100 h-4 rounded-lg w-full m-auto"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="md:col-span-5 col-span-3 ">
        <span className="text-red-primary text-center block py-4 font-bold">
          متاسفانه خطایی رخ داده است.
        </span>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-5 grid-cols-3 bg-white rounded-3xl">
      <span className="text-center block text-gray-400 font-semiBold text-lg py-4 border-b border-b-blue-100">
        رمز ارزها
      </span>
      <span className="text-center block text-gray-400 font-semiBold text-lg py-4 border-b border-b-blue-100">
        قیمت لحظه‌ای
      </span>
      <span className="text-center md:block hidden text-gray-400 font-semiBold text-lg py-4 border-b border-b-blue-100">
        حجم در ۲۴ ساعت
      </span>
      <span className="text-center md:block hidden text-gray-400 font-semiBold text-lg py-4 border-b border-b-blue-100">
        تغییرات یک هفته اخیر
      </span>
      <span className="text-center block text-gray-400 font-semiBold text-lg py-4 border-b border-b-blue-100">
        معامله
      </span>
      {coins?.result.map((coin: any) => (
        <TableRow
          key={coin.price}
          icon={coin.icon}
          price={numberSeprator(Math.round(coin.price).toFixed(0))}
          volume={numberSeprator(Math.round(coin.volume).toFixed(0))}
          priceChange1w={coin.priceChange1w}
        />
      ))}
    </div>
  );
};

const TableRow = (props: any) => {
  const { icon, price, volume, priceChange1w } = props;
  return (
    <div className="md:col-span-5 col-span-3 grid md:grid-cols-5 grid-cols-3 border-b border-b-blue-400">
      <div className="flex justify-center items-center md:py-4 py-2">
        <img
          src={icon}
          alt="icon"
          className="md:w-16 w-10 md:h-16 h-10 rounded-full"
        />
      </div>
      <span className="text-blue-primary font-bold text-center block md:py-4 py-2 my-auto">
        {price} دلار
      </span>
      <span className="text-gray-900 font-bold text-center md:block hidden md:py-4 py-2 my-auto">
        {volume}
      </span>
      <span className="text-green-primary font-bold text-center md:block hidden md:py-4 py-2 my-auto">
        {priceChange1w}
      </span>
      <button className="m-auto text-white bg-blue-500 rounded-xl py-2 px-3 font-semiBold md:text-base text-sm">
        خرید / فروش
      </button>
    </div>
  );
};
