import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().refine((val) => val.includes("@gmail.com"), {
    message: "Invalid email.",
  }),
  password: z
    .string()

    .refine(
      (val) =>
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/~`]).{8,}$/.test(
          val
        ),
      {
        message:
          "password length must be >=8 and should contain one capital , special , numeric character.",
      }
    ),
});
export type loginSchemaType = z.infer<typeof loginSchema>;
