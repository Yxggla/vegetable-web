import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { weeklyRecipes } from "@/data/recipes";
import { WeeklyRecipeStack } from "@/components/recipes/WeeklyRecipeStack";

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
				<div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
					<div className="rounded-3xl border border-green-100 bg-white/80 p-8 text-sm text-gray-600 shadow-sm backdrop-blur">
						<p className="text-base text-gray-700">
							Mix and match the days or prep multiple dishes on the weekend. Each menu highlights a hero vegetable so you can tie it back to the atlas and keep pantry planning simple.
						</p>
						<p className="mt-4 text-sm text-gray-500">
							Scroll the stack to float through the seven cards—each one pins as you pass, so you can focus on a single day at a time.
						</p>
					</div>
					<WeeklyRecipeStack recipes={weeklyRecipes} />
				</div>
			</section>
		</ModulePageShell>
	);
}
