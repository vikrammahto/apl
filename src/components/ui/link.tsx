import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

function AppLink({
  className,
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="link"
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { AppLink }