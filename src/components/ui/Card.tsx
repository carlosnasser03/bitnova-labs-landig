import React from 'react'
import { cn } from '@/utils/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  withGlass?: boolean
  className?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ withGlass = true, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-white/10 p-6 transition-all duration-200',
        withGlass && 'liquid-glass',
        className
      )}
      {...props}
    />
  )
)

Card.displayName = 'Card'

export { Card }
