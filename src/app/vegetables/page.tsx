import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { VegetableFilters } from "@/components/vegetables/VegetableFilters";
import { VegetableGrid } from "@/components/vegetables/VegetableGrid";
import { vegetables } from "@/data/vegetables";

export default function VegetablesPage() {
	return (
		<ModulePageShell
			title="Vegetable atlas"
			description="Discover seasonal cultivars, compare flavor profiles, and build a personalized collection for your kitchen or farm."
		>
			<section className="py-20">
				<div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
					<VegetableFilters items={vegetables} />
					<div className="space-y-6">
						<header className="flex flex-col space-y-2">
							<h2 className="text-2xl font-semibold text-gray-900">
								Seasonal highlights
							</h2>
							<p className="text-sm text-gray-600">
								Use filters to narrow down cultivars by category, season, or growing region. Tap the heart icon to add favorites for future planning.
							</p>
						</header>
						<VegetableGrid items={vegetables} />
					</div>
				</div>
			</section>
		</ModulePageShell>
	);
}
