import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function TestimonialsPage() {
	return (
		<ModulePageShell
			title="客户反馈"
			description="倾听合作伙伴和城市社区的声音，了解 VegetableWeb 带来的真实体验。"
		>
			<TestimonialsSection />
		</ModulePageShell>
	);
}
