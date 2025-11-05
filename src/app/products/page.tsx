import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { ProductsSection } from "@/components/home/ProductsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function ProductsPage() {
	return (
		<ModulePageShell
			title="Solutions"
			description="Choose the right mix of urban farming deployments for retail, hospitality, and campus partners."
		>
			<div className="space-y-16">
				<ProductsSection />
				<CtaSection />
			</div>
		</ModulePageShell>
	);
}
