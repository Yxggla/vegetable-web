"use client";

import ScrollStack, { ScrollStackItem } from "@/components/recipes/ScrollStack";
import type { WeeklyRecipe } from "@/data/recipes";

const badgeColors = [
	"from-green-500 via-lime-400 to-emerald-500",
	"from-amber-500 via-orange-400 to-rose-500",
	"from-sky-500 via-cyan-400 to-indigo-500",
];

function getBadgeGradient(index: number) {
	return badgeColors[index % badgeColors.length];
}

type WeeklyRecipeStackProps = {
	recipes: WeeklyRecipe[];
};

export function WeeklyRecipeStack({ recipes }: WeeklyRecipeStackProps) {
	return (
		<div className="relative">
			<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-green-50 via-white to-white opacity-80" />
			<ScrollStack className="h-[75vh] max-h-[900px] rounded-[48px] border border-green-100 bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
				{recipes.map((recipe, index) => (
					<ScrollStackItem key={recipe.dow}>
						<div className="flex flex-col h-full justify-between">
							<header className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
								<span>{recipe.dow}</span>
								<span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${getBadgeGradient(index)} px-4 py-1 text-[0.65rem] text-white shadow-lg shadow-green-900/10`}>
									<span className="h-2 w-2 rounded-full bg-white/80" />
									{recipe.theme}
								</span>
							</header>
							<div className="space-y-4 pt-6">
								<h3 className="text-3xl font-semibold text-gray-900">{recipe.spotlight}</h3>
								<p className="text-base leading-7 text-gray-600">{recipe.description}</p>
							</div>
							<div className="grid gap-6 pt-6 md:grid-cols-[1fr_minmax(0,0.8fr)]">
								<div>
									<p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
										Featured vegetables
									</p>
									<ul className="mt-3 flex flex-wrap gap-2 text-xs">
										{recipe.featuredVegetables.map((veg) => (
											<li
												key={veg}
												className="rounded-full border border-green-100 bg-green-50/80 px-3 py-1 font-medium text-green-700"
											>
												{veg}
											</li>
										))}
									</ul>
								</div>
								<div className="rounded-3xl border border-dashed border-green-200 bg-green-50/80 px-4 py-4 text-sm text-green-900">
									<p className="font-semibold uppercase tracking-[0.2em] text-xs text-green-800">Prep tip</p>
									<p className="mt-2 leading-6">{recipe.tips}</p>
								</div>
							</div>
							<footer className="pt-6 text-xs font-medium text-gray-400">
								<div className="flex items-center gap-2">
									<p className="uppercase tracking-[0.4em]">Day {index + 1} of 7</p>
									<div className="flex-1 h-px bg-gradient-to-r from-green-100 via-green-200 to-transparent" />
								</div>
							</footer>
						</div>
					</ScrollStackItem>
				))}
			</ScrollStack>
		</div>
	);
}
