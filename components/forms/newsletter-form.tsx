'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

import { Icons } from '../shared/icons';
import { GlowEButton } from '../shared/glow-button';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Enter a valid email.',
  }),
  name: z.string({
    message: 'Enter a your name.',
  }),
});

export function NewsletterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      toast({
        title: 'Subscription Successful',
        description: `Thank you, ${data.name}, for subscribing to our newsletter.`,
      });
      setIsLoading(false);
      form.reset();
    } catch (error) {
      toast({
        title: 'Subscription Failed',
        description: `We're sorry, ${data.name}, we couldn't process your subscription request at the moment. Please try again later.`,
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  className="h-10 rounded-lg border-0 bg-white/[0.04] px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-white/30 focus:ring-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-400" />
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
                  placeholder="Enter your email"
                  type="email"
                  className="h-10 rounded-lg border-0 bg-white/[0.04] px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-white/30 focus:ring-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-400" />
            </FormItem>
          )}
        />
        <GlowEButton type="submit" disabled={isLoading} className="h-10 w-full">
          {isLoading ? (
            <Icons.spinner className="mr-2 size-4 animate-spin" />
          ) : null}
          Subscribe
        </GlowEButton>
      </form>
    </Form>
  );
}
