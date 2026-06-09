import React from 'react'
import { Star } from 'lucide-react'

export interface StarRatingProps {
  rating: number
  count?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  count,
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          className={`${sizeMap[size]} ${
            star <= Math.round(rating)
              ? 'fill-amber-500 text-amber-500'
              : 'text-white/20'
          } transition-colors`}
        />
      ))}
      {count && <span className="ml-2 text-sm text-white/70">({count})</span>}
    </div>
  )
}

export { StarRating }
