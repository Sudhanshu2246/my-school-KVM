import CTASection from "@/components/home/CTASection";
import HomeHero from "@/components/home/HomeHero";
import SubjectsSection from "@/components/home/Subjects";
import Testimonials from "@/components/home/Testimonials";
import QualitySchoolHero from "@/components/home/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <QualitySchoolHero />
      <SubjectsSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}
