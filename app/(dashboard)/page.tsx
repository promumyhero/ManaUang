import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
import CreateTransactionDialog from './_components/CreateTransactionDialog';

async function page () {
  const user = await currentUser();
  if(!user) {
    redirect('/sign-in')
  }

  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id
    }
  })

  if(!userSettings) {
    redirect('/wizard')
  }

  return (
    <div className="h-full bg-background">
      <div className="border-b bg-card">
        <div className="container flex flex-col items-start gap-4 py-6 px-4 md:flex-row md:items-center md:justify-between md:gap-6 md:py-8 lg:px-8">
          <p className="text-2xl font-bold md:text-3xl">
            Hai, {user.firstName}! 👋
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-start md:w-auto">
            <CreateTransactionDialog
              trigger={
                <Button variant={"outline"} className="w-full border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700 hover:text-white sm:w-auto">
                  New Income 💸
                </Button>
              }
              type="income"
            />
            <CreateTransactionDialog
              trigger={
                <Button variant={"outline"} className="w-full border-rose-500 bg-rose-950 text-white hover:bg-rose-700 hover:text-white sm:w-auto">
                  New Expenses 🔥
                </Button>
              }
              type="expense"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page