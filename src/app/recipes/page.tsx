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
			<section className="pt-4 ">
				<div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
					<WeeklyRecipeStack recipes={weeklyRecipes} />
				</div>
			</section>
		</ModulePageShell>
	);
}
