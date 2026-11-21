import * as zod from "zod";

export let schema = zod
  .object({
    name: zod.string().min(1, "Name is required"),
    username: zod.union([
      zod.string()
        .min(5, "Username must be between 5 and 20 characters"),
      zod.literal("").optional()
    ]),
    email: zod.string().email("Invalid email address"),
    dateOfBirth: zod.coerce.date(),
    gender: zod.enum(["male", "female"], "Gender is required"),
    password: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
    rePassword: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Confirm password must match password",
      ),
  })
  .refine(
    function (values) {
      return values.password === values.rePassword;
    },
    { path: ["rePassword"], message: "Passwords do not match" },
  );


   export type SignUpFormValues = zod.infer<typeof schema>;