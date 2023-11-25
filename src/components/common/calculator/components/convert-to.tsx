export default function ConvertTo({ data }: any) {
  return (
    <div>
      <label className="text-blue-primary font-semiBold mb-2 text-sm block">
        تبدیل به
      </label>
      <div className="bg-blue-200 py-1 px-4 rounded-lg flex gap-4">
        <select className="w-full py-1 bg-transparent outline-none">
          {data?.map(({ name }: any) => (
            <option className="text-left m-4">{name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
