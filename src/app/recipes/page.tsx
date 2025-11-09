import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { WeeklyRecipeStack } from "@/components/recipes/WeeklyRecipeStack";
import { fetchWeeklyRecipes } from "@/lib/recipesApi";
import type { WeeklyRecipe } from "@/data/recipes";

export const metadata = {
	title: "Weekly Recipes",
	description: "Seven nourishing plant-forward recipes to keep your week balanced.",
};

export default async function RecipesPage() {
	let weeklyRecipes: WeeklyRecipe[] = [];

	try {
		weeklyRecipes = await fetchWeeklyRecipes();
	} catch (error) {
		console.error(error);
	}

	return (
		<ModulePageShell
			title="Weekly vegetable recipes"
			description="Plan seven days of nutrient-dense dishes curated from seasonal produce. Each card includes a theme, spotlight dish, and quick prep tip."
		>
			<section className="pt-4 ">
				<div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
					{weeklyRecipes.length > 0 ? (
						<WeeklyRecipeStack recipes={weeklyRecipes} />
					) : (
						<p className="rounded-3xl border border-dashed border-green-200 bg-white/70 px-6 py-12 text-center text-sm text-gray-500">
							Weekly recipes will appear here once they&apos;re published in Supabase.
						</p>
					)}
				</div>
			</section>
		</ModulePageShell>
	);
}
