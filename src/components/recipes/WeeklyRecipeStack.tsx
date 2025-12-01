"use client";

import ScrollStack, { ScrollStackItem } from "@/components/recipes/ScrollStack";
import type { WeeklyRecipe } from "@/data/recipes";

const badgeColors = [
	"bg-[#66bb6a]",
	"bg-[#4caf50]",
	"bg-[#43a047]",
	"bg-[#388e3c]",
	"bg-[#2e7d32]",
	"bg-[#1b5e20]",
];

function getBadgeColor(index: number) {
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
				stackPosition="6%"
				scaleEndPosition="2%"
				itemStackDistance={20}
			>
					{recipes.map((recipe, index) => {
						const badgeColor = getBadgeColor(index);
						const accessoryCount = recipe.accessories.length;
						const stepCount = recipe.cookingSteps.length;

						return (
							<ScrollStackItem key={`${recipe.dishName}-${index}`} >
							<div className="flex h-full flex-col gap-4 rounded-[24px] border border-green-100/70 bg-white/95 p-5 shadow-[0_15px_45px_rgba(16,185,129,0.08)]">
								<header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
									<div className="space-y-1.5">
										<div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gray-500">
											<span className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-3 py-1 text-[0.65rem] font-semibold text-gray-600">
												Day {index + 1}
											</span>
											<span className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-3 py-1 text-[0.65rem] font-semibold text-gray-600">
												{accessoryCount} ingredients
											</span>
										</div>
										<h3 className="text-3xl font-semibold text-gray-900">{recipe.dishName}</h3>
										<p className="text-lg leading-8 text-gray-600">
											Primary ingredient: <span className="font-medium text-gray-900">{recipe.mainIngredient}</span>
										</p>
									</div>
									<div className="flex flex-wrap items-center gap-3 text-base text-gray-600">
										<span
											className={`inline-flex items-center rounded-full ${badgeColor} px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white`}
										>
											Fresh focus
										</span>
										{/* <span className="text-lg">{stepCount} steps · {accessoryCount} add-ins</span> */}
									</div>
								</header>
								<div className="grid gap-4 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
										<section className="rounded-2xl border border-gray-100 bg-white p-4">
											<div className="flex items-center justify-between text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gray-500">
												<span>Steps</span>
												<span>{stepCount}</span>
											</div>
											<ol className="mt-3 space-y-3 text-lg leading-8 text-gray-700">
												{recipe.cookingSteps.map((step, stepIndex) => (
													<li key={`${recipe.dishName}-step-${stepIndex}`} className="flex gap-3 rounded-2xl border border-gray-100 bg-green-50/70 p-3 ">
														<span
															className={`inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${badgeColor} text-sm font-bold text-white`}
														>
															{stepIndex + 1}
														</span>
														<span>{step}</span>
													</li>
											))}
										</ol>
									</section>
									<section className="space-y-3">
										<div className="rounded-2xl border border-green-100 bg-green-50/70 p-4 text-base text-green-900">
											<p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-green-800">
												Cardio-metabolic friendly
											</p>
											<p className="mt-2 leading-7 text-green-900/90">{recipe.threeHighsBenefit}</p>
										</div>
										<div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4">
											<p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gray-500">Accessories</p>
											<ul className="mt-3 flex flex-wrap gap-2 text-base">
												{recipe.accessories.map((item) => (
													<li
														key={item}
														className="rounded-full border border-gray-200 bg-white px-4 py-1.5 font-medium text-gray-700"
													>
														{item}
													</li>
												))}
											</ul>
										</div>
									</section>
								</div>
								<footer className="pt-2 text-xs font-medium text-gray-400">
									<div className="flex items-center gap-3">
										<p className="uppercase tracking-[0.4em]">Day {index + 1} of 6</p>
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
