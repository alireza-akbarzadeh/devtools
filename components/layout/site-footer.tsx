import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '../shared/icons';
import React from 'react';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'relative w-full bg-white py-16 dark:bg-transparent',
        className,
      )}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              ABOUT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/submit-issue"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Submit an Issue
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  GitHub Repo
                </a>
              </li>
              <li>
                <a
                  href="/slack"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Slack
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              GETTING STARTED
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/docs/introduction"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/usage"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Usage
                </a>
              </li>
              <li>
                <a
                  href="/components"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="/themes"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Themes
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              RESOURCES
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/api"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/design"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Design Defined
                </a>
              </li>
              <li>
                <a
                  href="/marketplace"
                  className="text-sm text-gray-600 hover:text-primary dark:text-white/60 dark:hover:text-primary"
                >
                  Marketplace
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              SOCIAL MEDIA
            </h4>
            <p className="text-sm text-gray-600 dark:text-white/60">
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 transition-colors hover:text-primary dark:text-white/60 dark:hover:text-primary"
              >
                <Icons.twitter className="size-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 transition-colors hover:text-primary dark:text-white/60 dark:hover:text-primary"
              >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-600 dark:border-white/10 dark:text-white/60 md:flex-row">
          <div className="flex items-center gap-4">
            <span>
              {currentYear} {siteConfig.name}. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/terms" className="hover:text-primary">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="/security" className="hover:text-primary">
              Security
            </a>
            <a href="/sitemap" className="hover:text-primary">
              Sitemap
            </a>
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4 dark:border-white/10">
              <span>English</span>
              <Icons.chevronDown className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
