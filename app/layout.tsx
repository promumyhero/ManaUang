import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Mana Uang",
  description: "Ridho Hery W",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          inter.className}
      >
        <Toaster
          position="bottom-center"
        />
        
        <RootProviders>
        {children}
        </RootProviders>
      </body>
    </html>
    </ClerkProvider>
  );
}
