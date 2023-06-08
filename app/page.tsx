'use client'

import { AboutComponent, HeaderComponent, SongsSection, StoriesSection, ThoughtSection } from '@/components'
import { useRef } from 'react';


export default function Home() {


  return (
    <>
        <HeaderComponent></HeaderComponent>
        <AboutComponent></AboutComponent>
        <StoriesSection></StoriesSection>
        <SongsSection></SongsSection>
        <ThoughtSection></ThoughtSection>
    </>
  )
}
