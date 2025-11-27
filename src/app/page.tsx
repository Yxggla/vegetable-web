import { AboutSection } from "@/components/home/AboutSection";
import { CtaSection } from "@/components/home/CtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeNav } from "@/components/home/HomeNav";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { SiteFooter } from "@/components/home/SiteFooter";
import { TechnologySection } from "@/components/home/TechnologySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50">
			<HomeNav />
			<HeroSection />
			<AboutSection />
			<TechnologySection />
			<ImpactSection />
			{/* <ProductsSection /> */}
			<TestimonialsSection />
			{/* <CtaSection /> */}
			<SiteFooter />
		</div>
	);
}

