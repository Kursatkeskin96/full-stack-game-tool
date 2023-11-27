import HeroSection from '@/components/HeroSection'
import Info from '@/components/Info'
import WhoAreWe from '@/components/WhoAreWe'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
    <HeroSection />
    <WhoAreWe />
    <Info />
   </div>
  )
}
