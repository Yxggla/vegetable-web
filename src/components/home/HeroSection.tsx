export function HeroSection() {
	return (
		<section className="relative py-20 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
						Revolutionizing
						<span className="text-green-600 block">Agriculture</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
						Sustainable vertical farming technology that produces fresh,
						nutritious vegetables year-round using 95% less water than
						traditional farming.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
							Learn More
						</button>
						<button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
							Watch Demo
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

