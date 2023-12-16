import HeroSection from '@/components/HeroSection'
import Info from '@/components/Info'
import WhoAreWe from '@/components/WhoAreWe'
import Image from 'next/image'
 
export const metadata = {
  title: 'Albion Journey | Albion Online Guides and Tools',
  description: 'Master Albion Online with Albion Journey, your ultimate resource for expert game guides, a sophisticated profit calculator, and a marketplace for players. Elevate your gameplay, optimize your earnings, and trade with ease. Join our thriving community of Albion Online enthusiasts today!',
}

export default function Home() {
  return (
   <div>
    <HeroSection />
    <WhoAreWe />
    <Info />
   </div>
  )
}
