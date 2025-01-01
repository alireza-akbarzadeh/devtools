import Link from "next/link";



import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

import { features } from "./data";


export async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/alireza-akbarzadeh/react-lunchpad",
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-3">
            <Link
              href="https://x.com/AAkbarzadehDev"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  rounded: "full",
                }),
                "px-4",
              )}
              target="_blank"
            >
              <Icons.twitter className="mr-2 size-3.5" />
              Tweet Me
            </Link>
            <Link
              href="mailto:devtools95@gmail.com?subject=Hello%20DevTools"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  rounded: "full",
                }),
                "px-4",
              )}
              target="_blank"
            >
              <Icons.mail className="mr-2 size-3.5" />
              Email Me
            </Link>
          </div>
          <h1
            className="animate-fade-up text-balance font-urban text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Supercharge Your Development with{" "}
            <span className="text-gradient_indigo-purple font-extrabold">
              SaaS Starter
            </span>
          </h1>
          <p
            className="max-w-2xl animate-fade-up text-balance leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            Build your next project using Next.js 14, Prisma, Planetscale,
            Auth.js v5, Resend, React Email, Shadcn/ui, Stripe.
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Link
              href="/pricing"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Go Pricing
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-4",
              )}
            >
              <Icons.gitHub className="mr-2 size-4" />
              <p>
                <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
                <span className="font-semibold">{nFormatter(stars)}</span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="animate-fade-up py-16 text-zinc-500 opacity-0 dark:text-zinc-400"
        style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
      >
        <div className="container mx-auto">
          <h2 className="text-center text-sm font-semibold uppercase">
            Powered by
          </h2>

          <div className="my-7 flex flex-wrap items-center justify-center gap-10 gap-y-8 lg:gap-14">
            {features.map((feature) => (
              <Link
                target="_blank"
                key={feature.title}
                href={feature.href}
                aria-label={feature.title}
                className="flex flex-col items-center transition duration-300 hover:text-black dark:hover:text-white"
              >
                {feature.icon}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
