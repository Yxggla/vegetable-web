import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { TechnologySection } from "@/components/home/TechnologySection";

export default function TechnologyPage() {
	return (
		<ModulePageShell
			title="核心技术"
			description="深入了解我们的模块化种植单元、智慧监控系统与能源管理策略，看看技术如何支撑每一次收获。"
		>
			<TechnologySection />
		</ModulePageShell>
	);
}
