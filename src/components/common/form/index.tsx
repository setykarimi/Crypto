import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function ContactUsForm() {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  type FormValues = {
    username: string;
    email: string;
  };

  const onSubmit = (data: FormValues) => {
    console.log("formSUbmit", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="username">نام و نام خانوادگی</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: {
                value: true,
                message: "Username is required"
            } })}
          />

          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />

          <button type="submit">ارسال نظر</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
