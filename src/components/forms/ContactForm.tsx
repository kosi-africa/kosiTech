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
import { insertContactInformation } from "@/actions/ContactInformationAction";
import { EmailNotification } from "@/actions/EmailNotification";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name should be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  project: z.string(),
  message: z
    .string()
    .min(2, { message: "Message should be at least 2 characters long" }),
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

  async function onSubmit(contactInforData: z.infer<typeof contactFormSchema>) {
    const dbResponse = await insertContactInformation(contactInforData);
    if (dbResponse.length > 0) {
      toast.success("Success, details have been submit");
      EmailNotification(contactInforData)
      // const data = await EmailNotification();
      // if (data) {
      //   toast.info("please check your inbox for next steps");
      // }
      form.reset();
    } else toast.error("Error, Please try again later");
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
                  // defaultValue={field.value}
                  required
                >
                  <FormControl>
                    <SelectTrigger className="text-white bg-black">
                      <SelectValue placeholder="Select a project type text " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Website Design">
                      Website Design
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
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Processing..." : "Submit Request"}
          </Button>
        </form>
      </Form>
      <div className="flex justify-end items-center w-full  -mt-10 -ml-2 md:-mt-10 md:ml-0">
        <div className="flex justify-center items-center">
          <p className="px-2">Or</p>
          <Button
            variant="ghost"
            className=" border text-white hover:bg-slate-200 transition easein hover:scale-105 "
            disabled
          >
            Book a Meeting
          </Button>
        </div>
      </div>
    </section>
  );
}
