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
			<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-green-50 via-white to-white" />
			<ScrollStack
				className="h-[82vh] max-h-[1100px] rounded-[48px] border border-green-100 bg-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
				stackPosition="8%"
				scaleEndPosition="2%"
				itemStackDistance={20}
			>
				{recipes.map((recipe, index) => {
					const badgeGradient = getBadgeGradient(index);
					const accessoryCount = recipe.accessories.length;
					const stepCount = recipe.cookingSteps.length;

					return (
						<ScrollStackItem key={`${recipe.dishName}-${index}`}>
							<div className="flex h-full flex-col gap-7 rounded-[36px] border border-green-100/80 bg-white/95 p-6 shadow-[0_25px_80px_rgba(16,185,129,0.12)]">
								<header className="flex flex-col gap-5 rounded-[32px] border border-green-100/70 bg-gradient-to-br from-white via-green-50/60 to-white p-5 shadow-inner lg:flex-row lg:items-center lg:justify-between">
									<div className="space-y-2">
										<div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-gray-500">
											<span className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white/80 px-3 py-1 text-[0.65rem] font-semibold text-gray-600">
												Day {index + 1}
											</span>
											<span className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white/80 px-3 py-1 text-[0.65rem] font-semibold text-gray-600">
												{accessoryCount} ingredients
											</span>
										</div>
										<h3 className="text-3xl font-semibold text-gray-900">{recipe.dishName}</h3>
										<p className="text-base leading-7 text-gray-600">
											Primary ingredient: <span className="font-medium text-gray-900">{recipe.mainIngredient}</span>
										</p>
									</div>
									<div className="flex w-full flex-col gap-3 rounded-[28px] border border-white/70 bg-white/70 px-4 py-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between lg:max-w-lg">
										<div
											className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r ${badgeGradient} px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-green-900/15`}
										>
											Fresh focus
										</div>
										<p className="text-sm leading-6 text-gray-600 sm:text-right">
											{stepCount} guided steps · {accessoryCount} supportive add-ins
										</p>
									</div>
								</header>
								<div className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
									<section className="rounded-[32px] border border-gray-100/80 bg-white/95 p-5 shadow-[0_20px_50px_rgba(15,118,110,0.08)]">
										<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
											<p className="text-[0.75rem] font-semibold uppercase tracking-[0.35em] text-gray-500">Cooking steps</p>
											<span
												className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${badgeGradient} px-4 py-1 text-[0.7rem] font-semibold text-white`}
											>
												{stepCount} steps
											</span>
										</div>
										<ol className="mt-5 space-y-4 text-sm leading-6 text-gray-700 lg:space-y-6">
											{recipe.cookingSteps.map((step, stepIndex) => (
												<li
													key={`${recipe.dishName}-step-${stepIndex}`}
													className="flex gap-3 rounded-2xl border border-gray-100/80 bg-white/90 p-3 shadow-[0_4px_18px_rgba(15,118,110,0.05)] sm:gap-4"
												>
													<span
														className={`mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${badgeGradient} text-sm font-bold text-white`}
													>
														{stepIndex + 1}
													</span>
													<span>{step}</span>
												</li>
											))}
										</ol>
									</section>
									<section className="space-y-6">
										<div className="rounded-[32px] border border-green-100 bg-gradient-to-br from-green-50 via-white to-white p-5 text-sm text-green-900 shadow-inner">
											<p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-green-800">
												Cardio-metabolic friendly
											</p>
											<p className="mt-2 leading-7 text-green-900/90">{recipe.threeHighsBenefit}</p>
										</div>
										<div className="rounded-[32px] border border-gray-100/80 bg-gray-50/60 p-5">
											<p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-gray-500">Accessories</p>
											<ul className="mt-4 flex flex-wrap gap-2 text-sm sm:gap-3">
												{recipe.accessories.map((item) => (
													<li
														key={item}
														className={`rounded-full border border-transparent bg-gradient-to-r ${badgeGradient} p-[1px] text-white`}
													>
														<span className="block rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-gray-800">
															{item}
														</span>
													</li>
												))}
											</ul>
										</div>
									</section>
								</div>
								<footer className="pt-2 text-xs font-medium text-gray-400">
									<div className="flex items-center gap-3">
										<p className="uppercase tracking-[0.4em]">Day {index + 1} of 7</p>
										<div className="h-px flex-1 bg-gradient-to-r from-green-100 via-green-200 to-transparent" />
									</div>
								</footer>
							</div>
						</ScrollStackItem>
					);
				})}
			</ScrollStack>
		</div>
	);
}
