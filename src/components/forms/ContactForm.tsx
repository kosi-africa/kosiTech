"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name should be at least 2 characters long" }),
  email: z.string().email({message:'Please enter a valid email'}),
  project: z.string(),
  message: z.string().min(2,{message:"Message should be at least 2 characters long"}),
});


export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
      message: "",
    },
  });

  // function onSubmit(data: z.infer<typeof contactFormSchema>) {
  function onSubmit() {
    toast.info('Processing your data...')
    form.reset()
  }

  return (
    <section className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Name"
                      type="text"
                      {...field}
                      className="text-white bg-black"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Email"
                      type="email"
                      {...field}
                      className="text-white bg-black"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="project"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  required
                >
                  <FormControl>
                    <SelectTrigger className="text-white bg-black">
                      <SelectValue placeholder="Select a project type text "  />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Website Design">
                      Website Deisgn
                    </SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="Website Development">
                      Website Development
                    </SelectItem>
                    <SelectItem value="Mobile Development">
                      Mobile Development
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    {...field}
                    className="text-white bg-black"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
            <Button
              type="submit"
              className="bg-white text-black hover:bg-slate-200 transition ease-in hover:scale-105 mt-4"
            >
              Submit Request
            </Button>
        </form>
      </Form>
      <div className="flex justify-end items-center w-full -mt-10">
        <div className="flex justify-center items-center">
            <p className="px-2">Or</p>
            <Button
              variant="ghost"
              className=" border text-white hover:bg-slate-200 transition easein hover:scale-105 "
            >
              Book a Meeting
            </Button>

        </div>

      </div>
    </section>
  );
}
