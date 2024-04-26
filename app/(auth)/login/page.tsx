import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Icons } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 size-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <Card className="flex flex-col space-y-2 text-center">
          <CardHeader>
            <CardTitle>
              <Icons.logo className="mx-auto size-6" />
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back
              </h1>
            </CardTitle>
            <CardDescription>
              <p className="text-sm text-muted-foreground">
                Enter your email to sign in to your account
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense>
              <UserAuthForm />
            </Suspense>
          </CardContent>
          <CardFooter className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
