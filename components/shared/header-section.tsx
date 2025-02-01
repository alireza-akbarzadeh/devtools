import { cn } from '@/lib/utils';

interface HeaderSectionProps {
  label?: string;
  title: string;
  subtitle?: string;
  labelClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function HeaderSection(props: HeaderSectionProps) {
  const {
    label,
    title,
    subtitle,
    labelClassName,
    titleClassName,
    subtitleClassName,
  } = props;
  return (
    <div className="flex flex-col items-center text-center">
      {label ? (
        <div
          className={cn(
            'text-gradient_indigo-purple mb-4 font-semibold',
            labelClassName,
          )}
        >
          {label}
        </div>
      ) : null}
      <h2
        className={cn(
          'text-gradient_indigo-purple font-heading text-3xl md:text-4xl lg:text-[40px]',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-6 text-balance text-lg text-muted-foreground',
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
