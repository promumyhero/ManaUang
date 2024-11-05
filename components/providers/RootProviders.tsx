"use client"
import { ThemeProvider } from 'next-themes'
import React, { ReactNode, useEffect, useState } from 'react'

const RootProviders = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
        {children}
    </ThemeProvider>
  )
}

export default RootProviders