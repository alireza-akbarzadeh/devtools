"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { Icons } from "../shared/icons";

const FormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email.",
  }),
  name: z.string({
    message: "Enter a your name.",
  }),
});

export function NewsletterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
      });
      toast({
        title: "Subscription Successful",
        description: `Thank you, ${data.name}, for subscribing to our newsletter.`,
      });
      setIsLoading(false);
      form.reset();
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: `We're sorry, ${data.name}, we couldn't process your subscription request at the moment. Please try again later.`,
        variant: "destructive",
      });
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-2 sm:max-w-sm"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscribe to our newsletter</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="rounded-full px-4"
                  placeholder="your name"
                  {...field}
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
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className="rounded-full px-4"
                  placeholder="janedoe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!form.formState.isValid}
          type="submit"
          size="sm"
          rounded="full"
          className="mt-2 px-4"
          loading={isLoading}
        >
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
