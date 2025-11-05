import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { ImpactSection } from "@/components/home/ImpactSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function ImpactPage() {
	return (
		<ModulePageShell
			title="社会影响"
			description="看看我们在城市社区、合作伙伴以及可持续实践方面创造的改变。"
		>
			<div className="space-y-16">
				<ImpactSection />
				<TestimonialsSection />
			</div>
		</ModulePageShell>
	);
}
