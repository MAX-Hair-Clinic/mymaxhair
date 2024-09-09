import { Hero, LocationsSlider, PageLayout, ServiceSlider } from "@/components";

export default function Home() {
  return (
    <PageLayout showHeader showFooter>
      <Hero />
      <ServiceSlider />
      <LocationsSlider />
    </PageLayout>
  );
}
