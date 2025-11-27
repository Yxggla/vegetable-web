import Image from "next/image";

export function AboutSection() {
	return (
		<section id="about" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
							Eat better, starting with vegetables you understand
						</span>
						<h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
							Simple guides for picking, prepping, and cooking
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							We break down every vegetable with flavor notes, quick prep tips,
							and recipe ideas that keep nutrients intact. No jargon—just
							kitchen-friendly advice you can use tonight.
						</p>
						<div className="mt-8 grid sm:grid-cols-2 gap-6">
							<div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900">
									Flavor & texture profiles
								</h3>
								<p className="mt-2 text-sm text-gray-600">
									Know when to sauté, roast, or eat raw based on crunch, sweetness,
									and aroma.
								</p>
							</div>
							<div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900">
									Prep & storage shortcuts
								</h3>
								<p className="mt-2 text-sm text-gray-600">
									Faster washing, chopping, and keep-fresh steps that cut waste and
									save weeknight time.
								</p>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 blur-3xl opacity-70" />
						<div className="relative rounded-3xl border border-white/50 bg-white p-8 shadow-xl">
							<Image
								src="/window.svg"
								alt="VegetableWeb smart farm interior illustration"
								width={520}
								height={380}
								className="mx-auto"
							/>
							<p className="mt-6 text-center text-sm text-gray-500">
								Predictable harvests, guaranteed freshness, and transparent
								sourcing for every partner.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
