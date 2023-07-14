
import { Expletus_Sans, Inter } from 'next/font/google'

import Parent from './Parent'
import Navbar from './Navbar'
import Project from './Project'
import Experience from './Experience'
import Message from './Message'
import Skills from './Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
   <>
   
   <Navbar/>
   <Parent/>
   <Project/>
   
   <Experience/>
   <Skills/>
   <Message/>

   </>
  )
}
