const products = [
	{
		name: "Butter Lettuce",
		image: "🥬",
		description: "Soft, sweet leaves—best for wraps and light salads.",
	},
	{
		name: "Basil",
		image: "🌿",
		description: "Bright and aromatic; add off-heat to keep the oils vivid.",
	},
	{
		name: "Kale",
		image: "🥬",
		description: "Hearty texture; massage with oil or roast for crisp edges.",
	},
	{
		name: "Arugula",
		image: "🌱",
		description: "Peppery bite that pairs with citrus and creamy dressings.",
	},
];

export function ProductsSection() {
	return (
		<section id="products" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Veggie library
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Get tasting notes, prep steps, and recipe ideas for everyday greens
						and herbs—no shopping cart, just guidance.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<div
							key={product.name}
							className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="text-4xl mb-4 text-center">{product.image}</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								{product.name}
							</h3>
							<p className="text-gray-600 text-sm">{product.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
