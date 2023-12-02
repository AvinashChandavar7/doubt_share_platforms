// import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"

/* Shadcn */
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useToast } from "../../components/ui/use-toast"
import Loader from "../../components/shared/Loader"


import { SigninValidation } from "../../lib/validation"
import { useState } from "react"
import axios from "axios"
import { config } from "../../config"



const SignInForm = () => {

  const { toast } = useToast();
  const navigate = useNavigate();


  const [isSigningInAccount, setIsSigningInAccount] = useState(false);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.table(values);
    try {
      setIsSigningInAccount(true);

      const response = await axios.post(`${config.endpoint}/users/login`, values);

      console.log(response.data);

      const token = response.data.token;

      localStorage.setItem('token', token);

      toast({ title: "User login successfully" });

      navigate('/');
    } catch (error) {
      console.error("Error:", error);

      toast({ title: "An error occurred while logging in" });
    } finally {
      setIsSigningInAccount(false);
    }
  }


  return (

    <Form {...form}>

      <div className="sm:w-420 flex-center flex-col">


        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12 ">
          Login to your account
        </h2>

        <p className="text-light-3 small-medium md:base-regular mt-2">
          Welcome Back! Please enter your account details
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">

          {/* Email */}
          <FormField control={form.control} name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" placeholder="Enter the Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField control={form.control} name="password"
            render={({ field }) => (
              <FormItem className='mb-5'>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" placeholder="Enter the Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button_primary">
            {
              isSigningInAccount
                ? <div className="flex-center gap-2"> <Loader />  Loading...</div>
                : "Sign In"
            }
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            {"Don't have an account?"}
            <Link to='/sign-up' className="text-primary-500 text-small-semibold ml-1">
              Sign up
            </Link>
          </p>
        </form>

      </div>
    </Form>
  )
}


export default SignInForm



