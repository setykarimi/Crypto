import { CustomInputType } from "../input/type";

export default function CustomTextArea({
  register,
  errors,
  label,
  name,
  type,
  validationFormat,
}: CustomInputType) {
  return (
    <div className="mb-4">
      <textarea
        rows={8}
        cols={8}
        className="border border-gray-250 w-full p-2 rounded-xl outline-none placeholder:text-sm placeholder:text-gray-250"
        placeholder={label}
        type={type ? type : "text"}
        id={name}
        {...register(
          name,
          validationFormat
            ? validationFormat
            : {
                required: {
                  value: true,
                  message: `${label} الزامی است.`,
                },
              }
        )}
      />
      <p className="text-xs text-red-primary mt-1 font-semiBold">
        {errors[name]?.message}
      </p>
    </div>
  );
}
