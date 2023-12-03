/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as z from "zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

/* Shadcn */
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button"
import { useToast } from "../../components/ui/use-toast"
import Loader from "../../components/shared/Loader"

import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"




import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"




import { PostValidation } from "../../lib/validation";
import { validLanguage, validSubjects, validSubjectssss } from "../../constants"
import { useState } from "react"





const PostMyDoubts = ({ post, action }) => {

  // const navigate = useNavigate();
  // const { toast } = useToast();

  const [selectedSubject, setSelectedSubject] = useState(null);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      userType: '',
      language: '',
      description: '',
      // imgURL: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)


  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full max-w-5xl">


        {/* studentId, subject, description, language */}

        {/* Subject */}
        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel>Choose Subject</FormLabel>
              <FormControl>
                <Select onValueChange={(value) => {
                  field.onChange(value);
                  // setSelectedSubject(value);
                }} defaultValue={field.value} className="shad-select">
                  <SelectTrigger className="h-14">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900">
                    {validSubjects.map(subject => (
                      <SelectItem key={subject.id} value={subject.value} className="hover:bg-zinc-700">
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="shad-form_message text-red-500" />
            </FormItem>
          )}
        />
        {/* {selectedSubject && (
          <div className="flex items-center justify-center">
            <img src={validSubjects.find(subject => subject.value === selectedSubject)?.imgURL} alt="Subject Image" className="w-5 h-5" />
          </div>
        )} */}




        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <span className="flex justify-between">
                <FormLabel>Choose Language </FormLabel>
                {field.value && (<Label className="text-left capitalize font-extrabold text-primary-600">  {`Selected: ${field.value}`} </Label>)}
              </span>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                  className="radio-grid"
                >
                  {validLanguage.map(language => (
                    <div key={language.id}>
                      <RadioGroupItem value={language.value} id={language.value} className="peer sr-only" />
                      <Label
                        htmlFor={language.value}
                        className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground hover:bg-primary-800 active:bg-primary-800 ${field.value === language.value ? 'checked' : ''}`}
                      >
                        {language.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>

              <FormMessage className="shad-form_message text-red-500" />
            </FormItem>
          )}
        />




        {/* Caption */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Description</FormLabel>
              <FormControl>
                <Textarea className="shad-textarea custom-scrollbar" placeholder="Description yours Doubts" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message text-red-500" />
            </FormItem>
          )}
        />








        <div className="flex gap-4 items-center justify-end">
          <Button type="button" className="shad-button_dark_4">Cancel</Button>

          <Button type="submit"
            className="shad-button_primary whitespace-nowrap "
            disabled={""}
          >
            {action} Post
          </Button>
        </div>


      </form>
    </Form>
  )
}

export default PostMyDoubts;