import { useCoins } from "@hooks/useCoins";
import { RiSettings5Fill } from "react-icons/ri";
import { TbSwitchVertical } from "react-icons/tb";
import ConvertTo from "./components/convert-to";
import LoadingSkeleton from "./components/loading-skeleton";
import PaymentAmount from "./components/payment-amount";
import Result from "./components/result";
import { CalculatorPropsType } from "./type";

export default function Calculator({ customClassName }: CalculatorPropsType) {
  const { data: coins, isLoading } = useCoins("/coins?&limit=10");

  return (
    <div
      className={`${
        customClassName
          ? customClassName
          : "border-2 border-blue-300 rounded-3xl px-4 py-6 lg:w-7/12 md:w-9/12 w-full mx-auto flex flex-col relative z-1"
      }`}
      style={{
        background: customClassName
          ? ""
          : "linear-gradient(318deg, #DFE6FF -0.59%, #E7ECFF 21.43%, rgba(235, 239, 255, 0.00) 110.69%)",
      }}
    >
      <div className="flex justify-between text-blue-primary items-center gap-16">
        <h4 className="font-bold text-xl ml-auto">مبادله</h4>
        <RiSettings5Fill size={30} />
      </div>

      {/* Start مبلغ پرداختی */}
      {isLoading ? <LoadingSkeleton /> : <PaymentAmount data={coins?.result.splice(5)}/>}
      {/* End مبلغ پرداختی */}

      {/* Start Switch button */}
      <button className="my-2 mx-auto w-fit">
        <TbSwitchVertical className="text-green-primary" size={30} />
      </button>
      {/* End Switch button */}

      {/* Start تبدیل به */}
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <ConvertTo data={coins?.result.splice(0, 5)} />
      )}

      {/* End تبدیل به */}

      <Result />

      <button className="bg-red-700 text-white rounded-xl py-2 font-bold mt-4 w-full">
        تبادل کن
      </button>
    </div>
  );
}
