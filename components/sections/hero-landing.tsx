import Link from 'next/link';

import { env } from '@/env.mjs';
import { siteConfig } from '@/config/site';
import { cn, nFormatter } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/shared/icons';

export async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    'https://api.github.com/repos/alireza-akbarzadeh/react-lunchpad',
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          'Content-Type': 'application/json',
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
      <section className="space-y-6 pb-12 pt-16 lg:py-28"></section>
    </>
  );
}
