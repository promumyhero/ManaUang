import { CurrencyComboBox } from '@/components/CurrencyComboBox';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

async function page () {
    const user = await currentUser();
    if (!user) {
        redirect('/sign-in');
    }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:px-8">
        <div className="w-full">
            <h1 className="text-center text-2xl sm:text-3xl">
                Selamat Datang<span className="ml-2 font-bold">{user.firstName}! ✨</span> 
            </h1>
            <h2 className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-muted-foreground">
                Silahkan mulai dengan menentukan mata uang anda
            </h2>
            <h3 className="mt-2 text-center text-xs sm:text-sm text-muted-foreground">
                Kamu bisa mengganti mata uang kapan kamu mau
            </h3>
        </div>
        <Separator className="w-full"/>
        <Card className="w-full">
            <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Mata Uang</CardTitle>
                <CardDescription className="text-sm">
                    Tentukan mata uang yang ingin kamu gunakan
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
                <CurrencyComboBox />
            </CardContent>
        </Card>
        <Separator className="w-full"/>
        <Button className="w-full" asChild>
            <Link 
                href={'/'}
            >
                Aku siap! Bawa aku ke halaman utama 🎉
            </Link>
        </Button>
        <div className="mt-6 sm:mt-8">
            <Logo />
        </div>
    </div>
  )
}

export default page