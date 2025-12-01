const stats = [
	{ value: "20+", label: "Vegetable profiles" },
	{ value: "8+", label: "Benefit callouts" },
	{ value: "16+", label: "Seasonality notes" },
	{ value: "10", label: "Sales or ads" },
];

const workflow = [
	{
		title: "Browse by vegetable",
		description: "Get nutrition, benefits, flavor cues, and sourcing notes in seconds.",
		iconClass: "text-green-600",
		iconPath:
			"M13 16h-1v-4h-1m1-4h.01M5.455 20h13.09A2.455 2.455 0 0021 17.545V6.455A2.455 2.455 0 0018.545 4H5.455A2.455 2.455 0 003 6.455v11.09A2.455 2.455 0 005.455 20z",
	},
	{
		title: "Premium Recipes",
		description: "See which veggies support immunity, heart health, or digestion.",
		iconClass: "text-blue-600",
		iconPath: "M4 6h16M4 12h16M4 18h16",
	},
	{
		title: "Save your favorites",
		description: "Bookmark your vegetables and record your personal recipes",
		iconClass: "text-purple-600",
		iconPath: "M3 10h18M7 21h10M12 3v7m-7 0v11m14-11v11",
	},
];

export function ImpactSection() {
	return (
		<section id="impact" className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Better choices, clearer benefits
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						VegWell is an open guide to vegetables: nutrition highlights, health
						benefits, and flavor insights. No farming claims, no sales—just
						clarity.
					</p>
				</div>
				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((metric) => (
						<div
							key={metric.label}
							className="rounded-2xl border border-green-100 bg-white p-6 text-center shadow-sm"
						>
							<p className="text-4xl font-bold text-green-600">
								{metric.value}
							</p>
							<p className="mt-2 text-sm font-medium text-gray-500">
								{metric.label}
							</p>
						</div>
					))}
				</div>
				<div className="mt-16 grid gap-6 md:grid-cols-3">
					{workflow.map((step) => (
						<div
							key={step.title}
							className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
								<svg
									className={`h-6 w-6 ${step.iconClass}`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d={step.iconPath}
									/>
								</svg>
							</div>
							<h3 className="mt-4 text-lg font-semibold text-gray-900">
								{step.title}
							</h3>
							<p className="mt-2 text-sm text-gray-600">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
