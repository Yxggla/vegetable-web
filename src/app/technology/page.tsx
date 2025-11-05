import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { TechnologySection } from "@/components/home/TechnologySection";

export default function TechnologyPage() {
	return (
		<ModulePageShell
			title="Technology"
			description="Discover the modular grow units, monitoring systems, and energy strategy powering every harvest."
		>
			<TechnologySection />
		</ModulePageShell>
	);
}
