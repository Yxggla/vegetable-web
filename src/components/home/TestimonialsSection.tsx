const testimonials = [
	{
		name: "Jamie L.",
		role: "Home cook & busy parent",
		quote:
			"I finally understand which greens help with iron and which ones are lighter—makes grocery runs easier.",
	},
	{
		name: "Priya M.",
		role: "Nutrition-minded meal prepper",
		quote:
			"Love the quick nutrition snapshots and storage notes. I waste less and pick what fits my goals.",
	},
	{
		name: "Alex G.",
		role: "Beginner cook",
		quote:
			"The benefit callouts are concise—now I know when to choose arugula for a peppery boost or kale for more K.",
	},
];

export function TestimonialsSection() {
	return (
		<section id="testimonials" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
					Loved by health-minded people
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
