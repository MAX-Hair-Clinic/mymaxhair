import { Hero, LocationsSlider, PageLayout, ServiceSlider } from "@/components";

export default function Home() {
  return (
    <PageLayout showHeader showFooter>
      <Hero />
      <ServiceSlider />
      <LocationsSlider />

      <div className="h-screen" />
    </PageLayout>
  );
}

/*

Section Plan

Hero
Service Slider
Locations
USPs
About
Mascot
Services
Testimonials
FAQs

*/
