import React from 'react'
import { cn } from '@/utils/cn'

const socialColors = {
  facebook: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
  instagram: 'bg-pink-600/20 text-pink-400 border-pink-600/30',
  linkedin: 'bg-cyan-600/20 text-cyan-400 border-cyan-600/30',
  google: 'bg-red-600/20 text-red-400 border-red-600/30',
  twitter: 'bg-sky-600/20 text-sky-400 border-sky-600/30',
  github: 'bg-gray-600/20 text-gray-400 border-gray-600/30',
} as const

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof socialColors | 'default'
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    const colorClass = variant === 'default'
      ? 'bg-white/10 text-white/70 border-white/20'
      : socialColors[variant as keyof typeof socialColors]

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full border',
          colorClass,
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge, socialColors }
