'use client';

import Link from 'next/link';
import { MainNavItem } from '@/types';
import { User } from 'next-auth';

import { cn } from '@/lib/utils';
import useScroll from '@/hooks/use-scroll';
import { buttonVariants } from '@/components/ui/button';

import { Icons } from '../shared/icons';
import { MainNav } from './main-nav';
import { ModeToggle } from './mode-toggle';
import React from 'react';

interface NavBarProps {
  user: Pick<User, 'name' | 'image' | 'email'> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50);

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? 'border-b' : 'bg-background/0') : 'border-b'
      }`}
    >
      <div className="container flex h-[60px] items-center justify-between py-4">
        <MainNav items={items}>{children}</MainNav>
        <div className="flex items-center space-x-3">
          {rightElements}
          <ModeToggle />
          {!user ? (
            <Link
              href="/login"
              className={cn(
                buttonVariants({
                  rounded: 'full',
                }),
                'relative bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-4 shadow-[0px_0px_12px_#8c45ff]',
              )}
            >
              <div className="absolute inset-0 rounded-lg  border">
                <div className="[mask-image:linear-gradient(to_bottom,black,transparent))] absolute inset-0  rounded-lg border border-white/20" />
                <div className="[mask-image:linear-gradient(to_top,black,transparent))] absolute inset-0  rounded-lg border border-white/40" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(140,69,255,.7)_inset]" />
              </div>
              <span>Sign In</span>
              <Icons.arrowRight className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
