import { instance } from "@config/httpService";
import { GetCoinsPriceExchangeType } from "./type";

export const getCoinsPriceExchange = async ({
  from,
  to,
  timestamp
}: GetCoinsPriceExchangeType) => {
  try {
    const res = await instance.get(
      `coins/price/exchange?exchange=Binance&from=${from}&to=${to}&timestamp=${timestamp}`
    );
    console.log(res)
    
    return res.data;
  } catch (err) {
    return Promise.reject(err);
  }
};
