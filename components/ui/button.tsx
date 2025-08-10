import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const styles = cva(
  "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-mint/20 text-mint hover:bg-mint/30 focus:ring-mint/40",
        secondary: "bg-periwinkle/20 text-periwinkle hover:bg-periwinkle/30 focus:ring-periwinkle/40",
        ghost: "bg-transparent hover:bg-white/5 text-white"
      },
      full: { true: "w-full" }
    },
    defaultVariants: { variant: "primary" }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles> {}

export function Button({ className, variant, full, ...props }: ButtonProps) {
  return <button className={styles({ variant, full, className })} {...props} />
}


