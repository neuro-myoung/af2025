import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({ className, children }: {
    className?: string
    children: ReactNode
}) => {
    return <div
        className={cn(
            "h-full mx-auto w-full max-w-[1600px] px-2.5 md:px-16",
            className
        )}>{children}
    </div>
}

export default MaxWidthWrapper