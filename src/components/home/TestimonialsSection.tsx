const testimonials = [
	{
		name: "Jamie L.",
		role: "Home cook & busy parent",
		quote:
			"I used to overcook greens. The doneness cues and quick swaps mean dinner stays bright and my kids actually eat it.",
	},
	{
		name: "Priya M.",
		role: "Nutrition-minded meal prepper",
		quote:
			"Love the nutrition snapshots and storage tips—less waste, faster prep, healthier lunches.",
	},
	{
		name: "Alex G.",
		role: "Beginner cook",
		quote:
			"Recipes are simple and forgiving. The flavor notes help me swap ingredients without ruining the dish.",
	},
];

export function TestimonialsSection() {
	return (
		<section id="testimonials" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Trusted by home cooks
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Real feedback from people using VegWell to cook more vegetables,
						with less stress.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{testimonials.map((testimonial) => (
						<figure
							key={testimonial.name}
							className="flex flex-col justify-between rounded-3xl border border-green-100 bg-white p-6 shadow-sm"
						>
							<blockquote className="text-sm text-gray-600">
								{testimonial.quote}
							</blockquote>
							<figcaption className="mt-6">
								<p className="text-sm font-semibold text-gray-900">
									{testimonial.name}
								</p>
								<p className="text-xs uppercase tracking-wide text-gray-400">
									{testimonial.role}
								</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
