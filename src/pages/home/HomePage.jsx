import HeroSection from './sections/HeroSection'
import IntroSection from './sections/IntroSection'
import JourneySection from './sections/JourneySection'
import MagicSection from './sections/MagicSection'
import PartySection from './sections/PartySection'

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <IntroSection />
      <PartySection />
      <JourneySection />
      <MagicSection />
    </div>
  )
}

export default HomePage
