import CurrencyComboBox from '@/components/CurrencyComboBox';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
    const user = await currentUser();
    if (!user) {
        redirect('/sign-in');
    }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-center gap-4">
        <div>
        <h1 className="text-center text-3xl">
            Selamat Datang<span className="ml-2 font-bold">{user.firstName}! ✨</span> 
        </h1>
        <h2 className="mt-4 text-center text-muted-foreground">
            Silahkan mulai dengan menentukan mata uang anda
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
            Kamu bisa mengganti mata uang kapan kamu mau
        </h3>
        </div>
        <Separator/>
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Mata Uang</CardTitle>
                <CardDescription>
                    Tentukan mata uang yang ingin kamu gunakan
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CurrencyComboBox/>
            </CardContent>
        </Card>
        <Separator/>
        <Button className="w-full" asChild>
            <Link 
                href={'/'}
            >
                Aku siap! Bawa aku ke halaman utama 🎉
            </Link>
        </Button>
        <div className="mt-8">
            <Logo />
        </div>

    </div>
  );
}

export default page