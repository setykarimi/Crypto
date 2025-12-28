import {
  FaArrowDownLong,
  FaArrowUpLong,
  FaKickstarterK,
  FaPowerOff,
} from "react-icons/fa6";

export default function LiveDemo({ coins }: { coins: number[][] }) {
  function getOHLC(data: number[][]) {
    if (!data || data.length === 0) return null;

    const prices = data.map((item) => item[1]); // فقط ستون قیمت
    return {
      start: prices[0], // اولین قیمت
      highest: Math.max(...prices), // بیشترین
      lowest: Math.min(...prices), // کمترین
      close: prices[prices.length - 1], // آخرین قیمت
    };
  }

  const ohlc = getOHLC(coins);

  function formatNumber(num: unknown) {
    if (!num) return "0";

    const numberValue = Number(num);
    if (isNaN(numberValue)) return "0";

    const parts = numberValue.toFixed(2).split("."); // فقط دو رقم اعشار
    const integerPart = Number(parts[0]).toLocaleString("en-US"); // جداکننده هزارگان
    const decimalPart = parts[1] ? parts[1] : "";

    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  }

  return (
    <div className="mt-4 card-shadow bg-white rounded-2xl px-4 py-6 grid md:grid-cols-4 grid-cols-2 gap-4">
      {/* شروع */}
      <div className="flex items-center justify-center gap-2">
        <FaKickstarterK color="#466DF7" size={40} />
        <div>
          <span className="block text-center text-lg">شروع</span>
          <span className="text-blue-primary font-semiBold text-2xl block text-center mt-2">
            {formatNumber(ohlc?.start)}
          </span>
        </div>
      </div>

      {/* بالاترین */}
      <div className="flex items-center justify-center gap-2">
        <FaArrowUpLong color="#18CE2A" size={40} />
        <div>
          <span className="block text-center text-lg">بالاترین</span>
          <span className="text-green-primary font-semiBold text-2xl block text-center mt-2">
            {formatNumber(ohlc?.highest)}
          </span>
        </div>
      </div>

      {/* پایین ترین */}
      <div className="flex items-center justify-center gap-2">
        <FaArrowDownLong color="#F75B46" size={40} />
        <div>
          <span className="block text-center text-lg">پایین ترین</span>
          <span className="text-red-primary font-semiBold text-2xl block text-center mt-2">
            {formatNumber(ohlc?.lowest)}
          </span>
        </div>
      </div>

      {/* بسته شده */}
      <div className="flex items-center justify-center gap-2">
        <FaPowerOff color="#466DF7" size={40} />
        <div>
          <span className="block text-center text-lg">بسته شده</span>
          <span className="text-blue-primary font-semiBold text-2xl block text-center mt-2">
            {formatNumber(ohlc?.close)}
          </span>
        </div>
      </div>
    </div>
  );
}
