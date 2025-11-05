import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { AboutSection } from "@/components/home/AboutSection";
import { ImpactSection } from "@/components/home/ImpactSection";

export default function AboutPage() {
	return (
		<ModulePageShell
			title="About VegetableWeb"
			description="Learn about our mission, team, and urban agriculture blueprint behind every fresh harvest."
		>
			<div className="space-y-16">
				<AboutSection />
				<ImpactSection />
			</div>
		</ModulePageShell>
	);
}
