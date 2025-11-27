import Image from "next/image";

export function AboutSection() {
	return (
		<section id="about" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
							Eat better by knowing what each vegetable does for you
						</span>
						<h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
							Simple guides to nutrients, benefits, and flavor
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							We break down every vegetable with clear nutrition highlights,
							key benefits, sourcing notes, and flavor cues. No jargon—just
							practical facts to help you choose what fits your health goals.
						</p>
						<div className="mt-8 grid sm:grid-cols-2 gap-6">
							<div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900">
									Nutrition snapshots
								</h3>
								<p className="mt-2 text-sm text-gray-600">
									See fiber, vitamins, and phytonutrients at a glance, with
									benefits like immunity support or heart health.
								</p>
							</div>
							<div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900">
									Flavor & freshness notes
								</h3>
								<p className="mt-2 text-sm text-gray-600">
									Understand taste, texture, and seasonality so you can pick
									confidently and reduce waste.
								</p>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 blur-3xl opacity-70" />
						<div className="relative rounded-3xl border border-white/50 bg-white p-8 shadow-xl">
							<Image
								src="/images/home/02.JPG"
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
