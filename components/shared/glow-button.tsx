import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ComponentProps } from 'react';

interface GlowButtonProps extends ComponentProps<'button'> {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function GlowEButton(props: GlowButtonProps) {
  const { href, onClick, children, className, ...rest } = props;
  const content = (
    <>
      <div className="absolute inset-0 rounded-lg border">
        <div className="[mask-image:linear-gradient(to_bottom,black,transparent))] absolute inset-0 rounded-lg border border-white/20" />
        <div className="[mask-image:linear-gradient(to_top,black,transparent))] absolute inset-0 rounded-lg border border-white/40" />
        <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(140,69,255,.7)_inset]" />
      </div>
      {children}
    </>
  );

  const baseClassName = cn(
    buttonVariants({
      rounded: 'full',
    }),
    'relative bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-4 shadow-[0px_0px_12px_#8c45ff]',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={baseClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClassName} {...rest}>
      {content}
    </button>
  );
}
