'use client'

import { AboutComponent, HeaderComponent } from '@/components'
import { gsap } from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'



export default function Home() {
  const main = useRef(null);
  const smoother = useRef<ScrollSmoother>();

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  console.log(main)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      if (smoother.current !== null) {
        return smoother.current
      }

      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true
      });

      return () => ctx.revert();
    }, main)

  }, [])
  return (
    <>
      <main className="" ref={main}>
        <HeaderComponent></HeaderComponent>
        <AboutComponent></AboutComponent>
      </main>
    </>
  )
}
