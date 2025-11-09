import type { WeeklyRecipe } from "@/data/recipes";
import { supabase } from "@/lib/supabase";

type SupabaseWeeklyRecipe = {
	id: string;
	dish_name: string;
	main_ingredient: string;
	accessories: string[] | null;
	cooking_steps: string[] | null;
	three_highs_benefit: string;
	sort_order: number | null;
};

function mapWeeklyRecipe(record: SupabaseWeeklyRecipe): WeeklyRecipe {
	return {
		id: record.id,
		dishName: record.dish_name,
		mainIngredient: record.main_ingredient,
		accessories: record.accessories ?? [],
		cookingSteps: record.cooking_steps ?? [],
		threeHighsBenefit: record.three_highs_benefit,
	};
}

export async function fetchWeeklyRecipes(): Promise<WeeklyRecipe[]> {
	const { data, error } = await supabase
		.from("weekly_recipes")
		.select("*")
		.order("sort_order", { ascending: true })
		.order("created_at", { ascending: true });

	if (error) {
		throw new Error(`Failed to fetch weekly recipes: ${error.message}`);
	}

	return ((data ?? []) as SupabaseWeeklyRecipe[]).map(mapWeeklyRecipe);
}
