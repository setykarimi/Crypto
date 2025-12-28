import { useCoins } from "@hooks/use-coins";

export default function ChartTitle() {
  const { data: bitcoin, isLoading } = useCoins(`/coins/bitcoin`);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="rounded-full bg-slate-200 h-12 w-12"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-center gap-2">
        <img src={bitcoin.icon} alt={bitcoin.symbol} className="w-12 h-12" />
        <span className="font-black text-2xl ">{bitcoin.symbol}</span>
      </div>
    </div>
  );
}
