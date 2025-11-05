import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { ProductsSection } from "@/components/home/ProductsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function ProductsPage() {
	return (
		<ModulePageShell
			title="产品方案"
			description="为零售、餐饮、园区提供灵活的城市农业方案，挑选最适合的部署组合。"
		>
			<div className="space-y-16">
				<ProductsSection />
				<CtaSection />
			</div>
		</ModulePageShell>
	);
}
