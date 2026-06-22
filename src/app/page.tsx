import HeroSection from "@/components/HeroSection"
import WhatIsCalisthenics from "@/components/WhatIsCalisthenics"
import MethodologySection from "@/components/MethodologySection"
import ScheduleSection from "@/components/ScheduleSection"
import GraduationAccordion from "@/components/GraduationAccordion"
import TestimonialsSection from "@/components/TestimonialsSection"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import FooterSection from "@/components/FooterSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatIsCalisthenics />
      <MethodologySection />
      <ScheduleSection />
      <GraduationAccordion />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
