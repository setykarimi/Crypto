import { useExchangeStore } from "@store/exchange";

export default function ConvertTo({ data }: any) {
  const setTo = useExchangeStore((state) => state.setTo);
  return (
    <div>
      <label className="text-blue-primary font-semiBold mb-2 text-sm block">
        تبدیل به
      </label>
      <div className="bg-blue-200 py-1 px-4 rounded-lg flex gap-4">
        <select
          className="w-full py-1 bg-transparent outline-none"
          onChange={(e) => setTo(e.target.value)}
        >
          <option hidden selected className="text-left m-4">انتخاب کنید</option>
          {data?.map(({ name }: any) => (
            <option className="text-left m-4" value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
