import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3, "username must be >=3"),
  email: z.string().refine((val) => val.includes("@gmail.com"), {
    message: "invalid email.",
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
          "password length must be >=8 and should contain one capital , special , numeric letter.",
      }
    ),
  image: z.any().optional(),
});
export type UserSchemaType = z.infer<typeof userSchema>;
