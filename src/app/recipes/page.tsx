import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { weeklyRecipes } from "@/data/recipes";

export const metadata = {
	title: "Weekly Recipes",
	description: "Seven nourishing plant-forward recipes to keep your week balanced.",
};

export default function RecipesPage() {
	return (
		<ModulePageShell
			title="Weekly vegetable recipes"
			description="Plan seven days of nutrient-dense dishes curated from seasonal produce. Each card includes a theme, spotlight dish, and quick prep tip."
		>
			<section className="py-20">
				<div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:px-8">
					<div className="rounded-3xl border border-green-100 bg-white/80 p-8 text-sm text-gray-600 shadow-sm backdrop-blur">
						<p className="text-base text-gray-700">
							Mix and match the days or prep multiple dishes on the weekend. Each menu highlights a hero vegetable so you can tie it back to the atlas and keep pantry planning simple.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{weeklyRecipes.map((recipe) => (
							<article
								key={recipe.dow}
								className="flex flex-col space-y-4 rounded-3xl border border-green-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
							>
								<div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-500">
									<span>{recipe.dow}</span>
									<span className="text-green-600">{recipe.theme}</span>
								</div>
								<h3 className="text-xl font-semibold text-gray-900">
									{recipe.spotlight}
								</h3>
								<p className="text-sm leading-6 text-gray-600">{recipe.description}</p>
								<div>
									<p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
										Featured vegetables
									</p>
									<ul className="mt-2 flex flex-wrap gap-2 text-xs">
										{recipe.featuredVegetables.map((veg) => (
											<li
												key={veg}
												className="rounded-full border border-green-100 bg-green-50 px-3 py-1 font-medium text-green-700"
											>
												{veg}
											</li>
										))}
									</ul>
								</div>
								<div className="rounded-2xl border border-dashed border-green-200 bg-green-50/60 px-4 py-3 text-sm text-green-800">
									<strong className="font-semibold">Prep tip:</strong> {recipe.tips}
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</ModulePageShell>
	);
}
