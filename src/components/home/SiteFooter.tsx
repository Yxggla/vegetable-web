import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
	return (
		<footer id="contact" className="relative overflow-hidden bg-gray-900 text-white py-12">
			<div className="pointer-events-none absolute inset-0">
				<Image
					src="/images/footer/footer.PNG"
					alt="Footer decorative background"
					fill
					sizes="100vw"
					className="object-cover opacity-60"
					priority
				/>
				<div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">VegetableWeb</h3>
						<p className="text-gray-300">Your guide to vegetables, nutrition, and simple recipes.</p>
						<p className="mt-2 text-sm text-green-100">Learn it. Cook it. Enjoy it.</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Explore</h4>
						<ul className="space-y-2 text-gray-300">
							<li>
								<Link
									href="/#technology"
									className="hover:text-white transition-colors"
								>
									Technology
								</Link>
							</li>
							<li>
								<Link
									href="/#impact"
									className="hover:text-white transition-colors"
								>
									Impact
								</Link>
							</li>
							<li>
								<Link
									href="/vegetables"
									className="hover:text-white transition-colors"
								>
									Vegetables
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-white transition-colors"
								>
									About
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Contact</h4>
						<ul className="space-y-2 text-gray-300">
							<li>
								<a
									href="mailto:hello@vegetableweb.com"
								className="hover:text-white transition-colors"
							>
								hello@vegetableweb.com
							</a>
							</li>
							<li>
								<span className="text-gray-300">We&apos;re here to help you cook more vegetables.</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2024 VegetableWeb. Built for home cooks.</p>
				</div>
			</div>
		</footer>
	);
}
