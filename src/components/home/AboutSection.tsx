import Image from "next/image";

export function AboutSection() {
	return (
		<section id="about" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
							Urban farming reimagined
						</span>
						<h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
							From seed to store in the heart of the city
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							VegetableWeb combines modular indoor farms with smart operations
							software to deliver hyper-local vegetables in any neighborhood.
							Every farm is powered by renewable energy, monitored 24/7 by
							sensor networks, and managed by growers with decades of
							experience.
						</p>
						<div className="mt-8 grid sm:grid-cols-2 gap-6">
							<div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900">
									Closed-loop systems
								</h3>
								<p className="mt-2 text-sm text-gray-600">
									Water recirculation and nutrient recovery keep inputs low while
									protecting local ecosystems.
								</p>
							</div>
							<div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
								<h3 className="text-lg font-semibold text-gray-900">
									Data-driven quality
								</h3>
								<p className="mt-2 text-sm text-gray-600">
									Bespoke dashboards track growth cycles, flavor profiles, and
									harvest windows in real time.
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

