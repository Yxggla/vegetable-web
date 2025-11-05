import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function TestimonialsPage() {
	return (
		<ModulePageShell
			title="Testimonials"
			description="Hear directly from partners and communities about their VegetableWeb experience."
		>
			<TestimonialsSection />
		</ModulePageShell>
	);
}
