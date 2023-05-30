'use client'

import { HeaderComponent } from '@/components'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'


export default function Home() {
  const main = useRef();
  const smoother  = useRef<ScrollSmoother>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      if(smoother.current !== null){
        return smoother.current 
      }

      smoother.current = ScrollSmoother.create({
        smooth : 2,
        effects : true
      });
      
      return () => ctx.revert();
    }, [])
  
  })
  return (
    <>
    <main className="flex min-h-screen flex-col justify-center items-center" ref={main}>
      <HeaderComponent></HeaderComponent>
    </main>
    </>
      )
}
