import Link from "next/link";

export function HeroSection() {
	return (
		<section className="relative pb-12 pt-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<img
						src="/images/hero.PNG"
						alt="Hero Image"
						className="mx-auto block w-1/2 object-cover"
					/>
					<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
					Discover the nutrition, flavors, and growth stories behind vegetables — because health begins with understanding.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/vegetables"
							className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
						>
							Learn More
						</Link>
						<Link
							href="/recipes"
							className="inline-flex items-center justify-center border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
						>
							Explore Recipes
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
