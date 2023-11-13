import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function ContactUsForm() {
  type FormValues = {
    username: string;
    email: string;
    social: {
      twitter: string;
      facebook: string;
    };
    phoneNumbers: string[];
  };
  const form = useForm<FormValues>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: "Batman",
        email: data.email,
        social: {
          twitter: "",
          facebook: "",
        },
        phoneNumbers: ["", ""],
      };
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("formSUbmit", data);
  };

  return (
    <div className="flex justify-end">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <div>
            <label htmlFor="username">نام و نام خانوادگی</label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            <p>{errors.username?.message}</p>
          </div>

          <div>
            <label htmlFor="email">ایمیل</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return (
                      fieldValue !== "admin@example.com" ||
                      "Enter a diffrent email address"
                    );
                  },
                  notBlackListed: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("badddmain.com") ||
                      "This domain is not supported"
                    );
                  },
                },
              })}
            />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="twitter">Twitter</label>
            <input type="text" id="twitter" {...register("social.twitter")} />
          </div>

          <div>
            <label htmlFor="facebook">Faceook</label>
            <input type="text" id="facebook" {...register("social.facebook")} />
          </div>

          <div>
            <label htmlFor="primary-phone">primary phone</label>
            <input type="text" id="primary-phone" {...register("phoneNumbers.0")} />
          </div>
          <div>
            <label htmlFor="secondary-phone">secondary phone</label>
            <input type="text" id="secondary-phone" {...register("phoneNumbers.1")} />
          </div>


          <button type="submit">ارسال نظر</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
