import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { AboutSection } from "@/components/home/AboutSection";
import { ImpactSection } from "@/components/home/ImpactSection";

export default function AboutPage() {
	return (
		<ModulePageShell
			title="关于 VegetableWeb"
			description="了解我们的使命、团队与城市农业布局，认识每一份新鲜蔬菜背后的故事。"
		>
			<div className="space-y-16">
				<AboutSection />
				<ImpactSection />
			</div>
		</ModulePageShell>
	);
}
