export type VegetableCategory =
	| "Leafy greens"
	| "Roots"
	| "Cruciferous"
	| "Nightshades"
	| "Legumes"
	| "Alliums";

export type GrowingSeason = "Spring" | "Summer" | "Autumn" | "Winter";

export type Vegetable = {
	id?: string;
	slug: string;
	name: string;
	category: VegetableCategory;
	seasons: GrowingSeason[];
	description: string;
	origin: string;
	nutritionalHighlights: string[];
	image: string;
};

export const vegetables: Vegetable[] = [
	{
		slug: "spinach",
		name: "Spinach",
		category: "Leafy greens",
		seasons: ["Spring", "Autumn", "Winter"],
		description:
			"Tender leaves rich in iron and folate, perfect for fresh salads or quick sautés.",
		origin: "Central and Western Asia",
		nutritionalHighlights: ["Iron", "Vitamin K", "Folate"],
		image: "/vegetables/spinach.jpg",
	},
	{
		slug: "kale",
		name: "Kale",
		category: "Leafy greens",
		seasons: ["Autumn", "Winter"],
		description:
			"Hearty leaves with a peppery finish, ideal for smoothies, chips, or braised dishes.",
		origin: "Mediterranean basin",
		nutritionalHighlights: ["Vitamin C", "Calcium", "Antioxidants"],
		image: "/vegetables/kale.jpg",
	},
	{
		slug: "carrot",
		name: "Carrot",
		category: "Roots",
		seasons: ["Spring", "Summer", "Autumn"],
		description:
			"Crisp sweetness with vibrant color, versatile for raw snacks, roasting, or purees.",
		origin: "Central Asia",
		nutritionalHighlights: ["Beta-carotene", "Fiber", "Vitamin A"],
		image: "/vegetables/carrot.jpg",
	},
	{
		slug: "beetroot",
		name: "Beetroot",
		category: "Roots",
		seasons: ["Summer", "Autumn"],
		description:
			"Earthy roots with natural sweetness, great for roasting, pickling, or juicing.",
		origin: "Mediterranean region",
		nutritionalHighlights: ["Nitrates", "Manganese", "Folate"],
		image: "/vegetables/beetroot.jpg",
	},
	{
		slug: "broccoli",
		name: "Broccoli",
		category: "Cruciferous",
		seasons: ["Autumn", "Winter"],
		description:
			"Tightly packed florets with a mild flavor, perfect for steaming, roasting, or stir-fries.",
		origin: "Southern Italy",
		nutritionalHighlights: ["Vitamin C", "Fiber", "Sulforaphane"],
		image: "/vegetables/broccoli.jpg",
	},
	{
		slug: "cauliflower",
		name: "Cauliflower",
		category: "Cruciferous",
		seasons: ["Autumn", "Winter"],
		description:
			"Snowy florets and tender stalks that absorb seasoning well, from whole roasts to rice bowls.",
		origin: "Cyprus",
		nutritionalHighlights: ["Choline", "Vitamin C", "Fiber"],
		image: "/vegetables/cauliflower.jpg",
	},
	{
		slug: "tomato",
		name: "Tomato",
		category: "Nightshades",
		seasons: ["Summer"],
		description:
			"Sun-ripened fruit with umami depth, essential for sauces, salads, and fresh snacking.",
		origin: "Western South America",
		nutritionalHighlights: ["Lycopene", "Vitamin C", "Potassium"],
		image: "/vegetables/tomato.jpg",
	},
	{
		slug: "eggplant",
		name: "Eggplant",
		category: "Nightshades",
		seasons: ["Summer", "Autumn"],
		description:
			"Silky texture when cooked, with smoky notes ideal for grilling, roasting, or braising.",
		origin: "India",
		nutritionalHighlights: ["Fiber", "Nasunin", "Manganese"],
		image: "/vegetables/eggplant.jpg",
	},
	{
		slug: "snap-pea",
		name: "Snap pea",
		category: "Legumes",
		seasons: ["Spring", "Summer"],
		description:
			"Crisp pods packed with sweetness, enjoyed raw, lightly cooked, or tossed into stir-fries.",
		origin: "Mediterranean basin",
		nutritionalHighlights: ["Protein", "Vitamin C", "Fiber"],
		image: "/vegetables/snap-pea.jpg",
	},
	{
		slug: "chickpea",
		name: "Chickpea",
		category: "Legumes",
		seasons: ["Summer", "Autumn"],
		description:
			"Nutrient-dense pulses used in spreads, salads, and stews with creamy texture when cooked.",
		origin: "Fertile Crescent",
		nutritionalHighlights: ["Protein", "Folate", "Fiber"],
		image: "/vegetables/chickpea.jpg",
	},
	{
		slug: "garlic",
		name: "Garlic",
		category: "Alliums",
		seasons: ["Autumn", "Winter"],
		description:
			"Aromatic bulbs that transform dishes with depth, whether roasted, sautéed, or raw.",
		origin: "Central Asia",
		nutritionalHighlights: ["Allicin", "Manganese", "Vitamin B6"],
		image: "/vegetables/garlic.jpg",
	},
	{
		slug: "scallion",
		name: "Scallion",
		category: "Alliums",
		seasons: ["Spring", "Summer"],
		description:
			"Mild onion flavor with crisp stalks, perfect for garnishes, stir-fries, and broths.",
		origin: "Central Asia",
		nutritionalHighlights: ["Vitamin K", "Vitamin C", "Fiber"],
		image: "/vegetables/scallion.jpg",
	},
];
