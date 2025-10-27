const testimonials = [
	{
		name: "Chef Lucia Martinez",
		role: "Owner, Verde Bistro",
		quote:
			"The basil and baby greens arrive with consistent flavor every delivery. Our guests can taste the difference.",
	},
	{
		name: "Jordan Blake",
		role: "Director, Metro Food Bank",
		quote:
			"VegetableWeb helps us keep nutritious produce available year-round, even during supply chain disruptions.",
	},
	{
		name: "Priya Mehta",
		role: "Sustainability Officer, FreshMart",
		quote:
			"We cut food waste in half after integrating VegetableWeb farms directly into our urban distribution centers.",
	},
];

export function TestimonialsSection() {
	return (
		<section id="testimonials" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-14">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Trusted by chefs, grocers, and community leaders
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Our partners rely on VegetableWeb to deliver consistent quality and
						resilient supply chains.
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

