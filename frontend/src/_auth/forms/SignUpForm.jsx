// import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
// import axios from "axios";

/* Shadcn */
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useToast } from "../../components/ui/use-toast"
import Loader from "../../components/shared/Loader"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"



import { SignupValidation } from "../../lib/validation"
import { useRegisterAccount } from "../../lib/react-query/queriesAndMutations"
// import { config } from "../../config"
// import { useState } from "react";




const SignUpForm = () => {

  const { toast } = useToast();
  const navigate = useNavigate();


  const { mutateAsync: registerUserAccount, isPending: isCreatingUserAccount } = useRegisterAccount();

  // const [isCreatingUserAccount, setIsCreatingUserAccount] = useState(false);


  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      userType: "",
    },
  })

  // // 2. Define a submit handler.
  // async function onSubmit(values) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.table(values);

  //   try {
  //     setIsCreatingUserAccount(true);

  //     const response = await axios.post(`${config.endpoint}/users/register`, values);

  //     console.log(response.data);

  //     toast({ title: "User registered successfully" });

  //     navigate('/sign-in');

  //   } catch (error) {
  //     console.error("Error:", error);

  //     toast({ title: "An error occurred while registering the user" });
  //   } finally {
  //     setIsCreatingUserAccount(false);
  //   }
  // }

  // 2. Define a submit handler.
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.table(values);

    try {
      // Use the mutation to register the user
      await registerUserAccount(values);

      // Show success message or handle the success logic
      toast({ title: "User registered successfully" });

      // Navigate to the login page
      navigate('/sign-in');

    } catch (error) {
      console.error("Error:", error);

      // Show an error message or handle the error logic
      toast({ title: "An error occurred while registering the user" });
    }
  }




  return (

    <Form {...form}>

      <div className="sm:w-420 flex-center flex-col">

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12 ">
          Create a new account
        </h2>

        <p className="text-light-3 small-medium md:base-regular mt-2">
          Please enter your account details
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">

          {/* UserName */}
          <FormField control={form.control} name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="Enter the Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" placeholder="Enter the Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* UserType */}
          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>User Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value} className="shad-select">
                    <SelectTrigger className="h-14">
                      <SelectValue placeholder="Select a user type" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900">
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Tutor">Tutor</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <Button type="submit" className="shad-button_primary">
            {
              isCreatingUserAccount
                ? <div className="flex-center gap-2"> <Loader />  Loading...</div>
                : "Sign Up"
            }
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link to='/sign-in' className="text-primary-500 text-small-semibold ml-1">
              Sign in
            </Link>
          </p>
        </form>

      </div>
    </Form>
  )
}

export default SignUpForm