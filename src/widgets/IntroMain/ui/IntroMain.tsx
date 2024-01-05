import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'

export function IntroMain() {

  return (
    <section className="flex flex-col items-center bg-[url('/intro-bg.png')] h-[640px] max-w-[1440px] w-fuul m-auto pt-[180px] text-slate-100/95 max-[920px]:h-[540px] max-[570px]:px-[15px] max-[475px]:pt-[100px]">
        <h1 className='text-[40px] text-shadow-xl shadow-slate-800 max-[920px]:text-[34px] max-[570px]:text-center'>Everything You Love About Coffee</h1>
        <Image src="/logo-with-line-white.svg" width={200} height={29} alt="logo-line-white"/>
        <h3 className='text-[24px] mt-[35px] mb-[20px] max-[920px]:text-[20px] max-[920px]:mt-[25px] max-[920px]:mb-[12px] max-[570px]:text-center max-[475px]:text-[18px]'> We makes every day full of energy and taste </h3>
        <h3 className='text-[24px] max-[920px]:text-[20px] max-[570px]:text-center max-[475px]:text-[18px]'>Want to try our beans?</h3>
        <Button className='border px-[42px] py-[5px] bg-slate-300/0 hover:bg-slate-100/50 mt-[18px]'>More</Button>
    </section>
  )
}
