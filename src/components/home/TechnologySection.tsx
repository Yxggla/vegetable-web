const features = [
	{
		title: "Nutrition at a glance",
		description: "Calories, fiber, and key vitamins summarized so you can pair dishes smartly.",
		iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
		containerClass: "bg-green-50",
		badgeClass: "bg-green-600",
	},
	{
		title: "Step-by-step cooking",
		description: "Heat levels, timing, and seasoning baselines to keep veggies crisp and bright.",
		iconPath:
			"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
		containerClass: "bg-blue-50",
		badgeClass: "bg-blue-600",
	},
	{
		title: "Seasonal highlights",
		description: "Which vegetables are tasting best right now, and simple ways to use them.",
		iconPath:
			"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
		containerClass: "bg-purple-50",
		badgeClass: "bg-purple-600",
	},
];

export function TechnologySection() {
	return (
		<section id="technology" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						A clear path from vegetable to plate
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						We organize veggie knowledge so you don&apos;t have to guess: what to
						buy, how to prep, and when to season for the best flavor.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature) => (
						<div
							key={feature.title}
							className={`text-center p-6 rounded-lg ${feature.containerClass}`}
						>
							<div
								className={`w-16 h-16 ${feature.badgeClass} rounded-full flex items-center justify-center mx-auto mb-4`}
							>
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d={feature.iconPath}
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>

				<div className="mt-16 rounded-3xl bg-gradient-to-r from-green-600 to-blue-600 p-10 text-white">
					<div className="grid md:grid-cols-2 gap-10">
						<div>
							<h3 className="text-2xl font-semibold">VegWell Guide Hub</h3>
							<p className="mt-3 text-sm md:text-base text-green-50">
								Save your favorite vegetables, bookmark recipes, and keep quick
								reference cards for texture, nutrition, and prep.
							</p>
						</div>
						<div className="space-y-4 text-sm md:text-base text-green-50">
							{[
								"Flavor-safe timers and doneness cues for sauté, roast, and steam.",
								"Swap suggestions when you’re missing an ingredient but want the same profile.",
								"Allergens and nutrition called out in plain language—no guessing.",
							].map((item, index) => (
								<div key={item} className="flex items-start gap-3">
									<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
										{index + 1}
									</span>
									<p>{item}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
