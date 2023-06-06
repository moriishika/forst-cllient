'use client'

import { AboutComponent, HeaderComponent } from '@/components'
import { useRef } from 'react';


export default function Home() {
  const main = useRef(null);

  

  return (
    <>
      <main className="" ref={main}>
        <HeaderComponent></HeaderComponent>
        <AboutComponent></AboutComponent>
      </main>
    </>
  )
}
