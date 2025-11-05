import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { ImpactSection } from "@/components/home/ImpactSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function ImpactPage() {
	return (
		<ModulePageShell
			title="Impact"
			description="Explore how we collaborate with cities, partners, and communities to build sustainable food systems."
		>
			<div className="space-y-16">
				<ImpactSection />
				<TestimonialsSection />
			</div>
		</ModulePageShell>
	);
}
