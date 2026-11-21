 import { FormState, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { data } from "react-router-dom";
import { toast } from "@heroui/react";
import axios, { isAxiosError } from "axios";
import { schema } from "../../Schema/login.schema";
import type { SignupFormValues } from "./login.type";
 
 
 export default function Login() {


 const {handleSubmit, register, formState} = useForm({
defaultValues: 
   
{
  
  email: "",

  password: ""
 
},
mode: "onSubmit",
resolver: zodResolver(schema)


}

)
const [loading, setloading] = useState(false);

 async function  myhandleSubmit(values: SignupFormValues) {
   console.log("Form submitted", values);
   
   // You can perform further actions with the form data here, such as sending it to a server.

   // API CALL: Send signup data to the Backend and handle the response// وبستخدم >>(Async/Await عشان اعمل ال API call)

  //  try {
  //    let res = await fetch("https://route-posts.routemisr.com/users/signup", {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify(values),
  //    });
  //    // Convert the API response from JSON format into a JavaScript object متنسيش علشان تعرفي تقرئي هل فيه مشكله ولا لا
  //    let data = await res.json();





setloading(true)

 try {
   let { data } = await axios.post(
     "https://route-posts.routemisr.com/users/signin",
     values,
   );

   console.log(data);
   toast.success(data.message);
 } 
 catch (error) {
   if (isAxiosError(error)) 
    {
     toast.danger(
       error.response
         ? error.message
         : "Something went wrong. Please try again.",
     );
     console.log(error.response);
   }
 } finally {
   setloading(false);
 } 
  
}












  return (
    <>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* First Container - Illustration */}

          <div className="bg-[#102D4D] text-white flex flex-col items-center justify-center p-10 text-center">
            <img
              src="https://cdn.dribbble.com/userupload/10890758/file/original-ba61d307acb31e466b36d1ba02924d2b.jpg?resize=1600x1200"
              alt="Registration Illustration"
              className="w-full max-w-xs h-64 object-contain mb-6"
            />

            <h1 className="text-3xl font-bold mb-3">Welcome!</h1>

            <p className="text-slate-300 leading-relaxed max-w-xs">
              Create your account and join us today. Start your journey with us!
            </p>
          </div>

          {/* Second Container - Register Form */}

          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Create Account
            </h2>

            <p className="text-slate-500 mb-8">
              Please fill in your details to register.
            </p>
            <form onSubmit={handleSubmit(myhandleSubmit)} className="space-y-4">
             

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
                {formState.errors.email && (
                  <span className="inline-block mt-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                    {formState.errors.email.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  
                  placeholder="Enter your password"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
                {formState.errors.password && (
                  <span className="inline-block mt-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                    {formState.errors.password.message}
                  </span>
                )}
              </div>

             

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 mt-4"
              >
              {loading?"loading": "SignIn" }
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}   