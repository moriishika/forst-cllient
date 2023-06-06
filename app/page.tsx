'use client'

import { AboutComponent, HeaderComponent, SongsSection, StoriesSection, ThoughtSection } from '@/components'
import { useRef } from 'react';


export default function Home() {
  const main = useRef(null);

  

  return (
    <>
      <main className="" ref={main}>
        <HeaderComponent></HeaderComponent>
        <AboutComponent></AboutComponent>
        <StoriesSection></StoriesSection>
        <SongsSection></SongsSection>
        <ThoughtSection></ThoughtSection>
      </main>
    </>
  )
}
