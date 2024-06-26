'use client'
import { useUser } from "@clerk/nextjs"
import { NextUIProvider } from "@nextui-org/react"
import { usePathname } from "next/navigation"

interface ProviderProps {
    children: React.ReactNode
}

export default function Provider ({children}: ProviderProps) {
    const pathname = usePathname()

    const {isLoaded} = useUser()

    if (!isLoaded) {
        return null
    }

    return (
        <NextUIProvider>
            {pathname !== '/dashboard/new-email' && pathname !== '/' && pathname !== '/sign-in' && pathname !== '/subscribe' && pathname !== '/sign-up' ? (
                <div className='w-full flex'>
                    <div className='w-[290px] h-screen overflow-y-scroll'>

                    </div>
                </div>
            ) : (
                <>{children}</>
            )}
        </NextUIProvider>
    )
}