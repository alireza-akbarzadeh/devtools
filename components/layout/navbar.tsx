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
                'px-4',
              )}
            >
              <span>Sign In</span>
              <Icons.arrowRight className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
