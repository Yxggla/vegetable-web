import Link from "next/link";

export function SiteFooter() {
	return (
		<footer id="contact" className="bg-gray-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">VegetableWeb</h3>
						<p className="text-gray-400">
							Revolutionizing agriculture through technology and sustainability.
						</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Company</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<Link href="#about" className="hover:text-white transition-colors">
									About
								</Link>
							</li>
							<li>
								<Link
									href="#careers"
									className="hover:text-white transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link href="#press" className="hover:text-white transition-colors">
									Press
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Products</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<Link
									href="#vegetables"
									className="hover:text-white transition-colors"
								>
									Vegetables
								</Link>
							</li>
							<li>
								<Link
									href="#technology"
									className="hover:text-white transition-colors"
								>
									Technology
								</Link>
							</li>
							<li>
								<Link
									href="#sustainability"
									className="hover:text-white transition-colors"
								>
									Sustainability
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4">Contact</h4>
						<ul className="space-y-2 text-gray-400">
							<li>hello@vegetableweb.com</li>
							<li>+1 (555) 123-4567</li>
							<li>New York, NY</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2024 VegetableWeb. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

