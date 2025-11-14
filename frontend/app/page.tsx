import LandingLayout from "@/components/inhouse/layouts/landingLayout";
import { Hero } from "@/components/inhouse/landing/hero";
import { Testimonials } from "@/components/inhouse/landing/testimonials";
import { Features } from "@/components/inhouse/landing/features";
import { Pricing } from "@/components/inhouse/landing/pricing";

export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <Testimonials />
      <Features />
      <Pricing />
    </LandingLayout>
  );
}
           