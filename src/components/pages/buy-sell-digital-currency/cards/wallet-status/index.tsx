import MyWalletStatusChart from "./components/chart";
import MyWalletStatusContent from "./components/content";

export default function WalletStatus() {
  return (
    <div
      className="bg-white p-4 rounded-2xl grid xl:grid-cols-2 gap-4"
      style={{
        boxShadow: "0px 12px 25px -9px rgba(83, 83, 83, 0.15)",
      }}
    >
      <MyWalletStatusContent />
      <MyWalletStatusChart />
    </div>
  );
}
