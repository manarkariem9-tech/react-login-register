import { FormState, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { schema } from "../../Schema/register.Schema";
import { data, useNavigate } from "react-router-dom";
import { toast } from "@heroui/react";
import axios, { isAxiosError } from "axios";
import type { SignupFormValues } from "./register.types";
import Login from "../Login/login";






export default function Register() {

//  function handlesubmit(e: submitEvent) {
//      e.preventDefault();
//      // Handle form submission logic here
//      console.log('Form submitted');
//  }


 const {handleSubmit, register, formState} = useForm({
defaultValues: 
   
{
  name: "",
  username: "",
  email: "",
  dateOfBirth: "",
  gender: "female",
  password: "",
  rePassword: ""
},
mode: "onSubmit",
resolver: zodResolver(schema)


}

)
const [loading, setloading] = useState(false);


let nav = useNavigate()


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

  setTimeout(() => {nav("/login");
    
  }, 2000);




setloading(true)

 try {
   let { data } = await axios.post(
     "https://route-posts.routemisr.com/users/signup",
     values,
   );

   console.log(data);
   toast.success(data.message);
 } catch (error) {
   if (isAxiosError(error)) {  toast.danger(
     error.response ? error.message : "Something went wrong. Please try again.",
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
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  {...register("name")}
                />

                {formState.errors.name && (
                  <span className="inline-block mt-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                    {formState.errors.name.message}
                  </span>
                )}
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Username
                </label>
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
                {formState.errors.username && (
                  <span className="inline-block mt-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                    {formState.errors.username.message}
                  </span>
                )}
              </div>

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

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Date of Birth
                </label>
                <input
                  {...register("dateOfBirth")}
                  type="date"
                  name="dateOfBirth"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
                {formState.errors.dateOfBirth && (
                  <span className="inline-block mt-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                    {formState.errors.dateOfBirth.message}
                  </span>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Gender
                </label>
                <select
                  {...register("gender")}
                  name="gender"
                  defaultValue=""
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
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

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Confirm Password
                </label>
                <input
                  {...register("rePassword")}
                  type="password"
                 
                  placeholder="Confirm your password"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
                {formState.errors.rePassword && (
                  <span className="inline-block mt-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
                    {formState.errors.rePassword.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 mt-4"
              >
              {loading?"loading": "createaccount" }
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
