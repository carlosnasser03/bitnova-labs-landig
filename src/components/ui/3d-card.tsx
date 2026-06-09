"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  return (
    <div
      className={cn("h-96 w-full perspective", containerClassName)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "w-full transition-transform duration-200 ease-linear",
          className
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "h-96 w-full [transform-style:preserve-3d] group/card relative",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}

export const CardItem = ({
  children,
  className,
  translateZ = 0,
  translateX = 0,
  translateY = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  children: React.ReactNode
  className?: string
  translateZ?: number
  translateX?: number
  translateY?: number
  rotateX?: number
  rotateY?: number
  rotateZ?: number
  [key: string]: any
}) => {
  return (
    <motion.div
      className={cn("w-fit transform", className)}
      style={{
        transform: `translateZ(${translateZ}px) translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
