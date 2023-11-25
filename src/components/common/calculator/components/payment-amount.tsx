export default function PaymentAmount({ data }: any) {
  return (
    <div className="mt-4">
      <label className="text-blue-primary font-semiBold mb-2 text-sm block">
        مبلغ پرداختی
      </label>
      <div className="bg-blue-200 py-1 px-4 rounded-lg flex gap-4">
        <input
          className="bg-transparent w-2/3 py-2 text-left outline-none placeholder:text-xs placeholder:text-gray-300 placeholder:text-right text-gray-400 text-sm ltr"
          placeholder="مبلغ مورد نظر خود را وارد کنید"
          type="number"
        />
        <select className="w-1/3 bg-transparent outline-none">
          {data?.map(({ name }: any) => (
            <option className="text-left m-4">{name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
