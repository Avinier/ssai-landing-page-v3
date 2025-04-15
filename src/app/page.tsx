import HeroSection from "@/components/sections/hero-section";
import LogosSection from "@/components/sections/logos-section";
import FeaturesSection from "@/components/sections/features-section";
import DeploymentSection from "@/components/sections/deployment-section";
import CodeSection from "@/components/sections/code-section";
import DeployCardSection from "@/components/sections/deploy-card-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <DeploymentSection />
      <CodeSection />
      <DeployCardSection />
    </>
  );
}
