import * as zod from "zod";

export let schema = zod
  .object({
    
    email: zod.string().email("Invalid email address"),
   
    password: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      )
  })
 


//    export type LoginFormValues = zod.infer<typeof schema>;