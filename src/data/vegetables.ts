export type VegetableCategory =
	| "Leafy greens"
	| "Cruciferous vegetables"
	| "Cucurbitaceous vegetables"
	| "Allium vegetables"
	| "Edible fungi"
	| "Root vegetables";

export type GrowingSeason =
	| "Spring"
	| "Summer"
	| "Autumn"
	| "Winter"
	| "All year round";

export type Vegetable = {
	id?: string;
	slug: string;
	name: string;
	chineseName: string;
	category: VegetableCategory;
	seasons: GrowingSeason[];
	description: string;
	origin: string;
	nutritionalHighlights: string[];
	benefitsForThreeHighs: string[];
	image: string;
};

export const vegetables: Vegetable[] = [
	{
		slug: "spinach",
		name: "Spinach",
		chineseName: "菠菜",
		category: "Leafy greens",
		seasons: ["Spring", "Autumn", "Winter"],
		description:
			"Tender leaves rich in iron, folate and potassium, perfect for fresh salads, quick sautés or light soups. Friendly for people with hypertension, hyperglycemia and hyperlipidemia.",
		origin: "Central and Western Asia",
		nutritionalHighlights: [
			"Iron",
			"Vitamin K",
			"Folate",
			"Potassium",
			"Dietary Fiber",
		],
		benefitsForThreeHighs: [
			"Potassium regulates blood pressure",
			"Dietary fiber slows sugar absorption",
			"Low calorie & low fat",
			"Magnesium protects blood vessel elasticity",
		],
		image: "/vegetables/spinach.jpg",
	},
	{
		slug: "broccoli",
		name: "Broccoli",
		chineseName: "西兰花",
		category: "Cruciferous vegetables",
		seasons: ["Spring", "Autumn"],
		description:
			"Compact green florets packed with nutrients, ideal for stir-frying, steaming or boiling. Helps control cholesterol and blood sugar levels.",
		origin: "Mediterranean region",
		nutritionalHighlights: ["Vitamin C", "Dietary Fiber", "Vitamin E", "Calcium"],
		benefitsForThreeHighs: [
			"Soluble fiber lowers cholesterol",
			"Low glycemic index stabilizes blood sugar",
			"Antioxidants protect blood vessels",
			"Low sodium & high potassium",
		],
		image: "/vegetables/broccoli.jpg",
	},
	{
		slug: "winter-melon",
		name: "Winter Melon",
		chineseName: "冬瓜",
		category: "Cucurbitaceous vegetables",
		seasons: ["Autumn", "Winter"],
		description:
			"Crisp, watery flesh with mild flavor, great for soups, stews or stir-fries. Almost fat-free and low in calories.",
		origin: "Southern Asia",
		nutritionalHighlights: ["Potassium", "Vitamin C", "Dietary Fiber", "Magnesium"],
		benefitsForThreeHighs: [
			"Diuretic effect reduces vascular pressure",
			"Zero fat & low calorie",
			"High water content promotes metabolism",
			"Fiber aids in lipid metabolism",
		],
		image: "/vegetables/winter-melon.jpg",
	},
	{
		slug: "onion",
		name: "Onion",
		chineseName: "洋葱",
		category: "Allium vegetables",
		seasons: ["All year round"],
		description:
			"Pungent bulb with layers, suitable for stir-frying, roasting or raw consumption. Contains unique compounds beneficial for blood pressure and lipid control.",
		origin: "Southwest Asia",
		nutritionalHighlights: [
			"Sulfur compounds",
			"Vitamin C",
			"Potassium",
			"Dietary Fiber",
		],
		benefitsForThreeHighs: [
			"Sulfur compounds relax blood vessels",
			"Lowers bad cholesterol (LDL)",
			"Regulates blood sugar",
			"Antioxidants reduce vascular inflammation",
		],
		image: "/vegetables/onion.jpg",
	},
	{
		slug: "wood-ear-fungus",
		name: "Wood Ear Fungus",
		chineseName: "木耳",
		category: "Edible fungi",
		seasons: ["Autumn", "Winter"],
		description:
			"Chewy, black or brown fungus, often used in stir-fries or soups. Rich in soluble fiber.",
		origin: "East Asia",
		nutritionalHighlights: ["Dietary Fiber", "Iron", "Calcium", "Vitamin K"],
		benefitsForThreeHighs: [
			"Fiber adsorbs fat & cholesterol",
			"Slows glucose absorption",
			"Low calorie & low sugar",
			"Promotes intestinal detoxification",
		],
		image: "/vegetables/wood-ear-fungus.jpg",
	},
	{
		slug: "chinese-yam",
		name: "Chinese Yam",
		chineseName: "山药",
		category: "Root vegetables",
		seasons: ["Autumn", "Winter"],
		description:
			"Creamy, starchy flesh with mild sweetness, good for boiling, steaming or stir-frying. Gentle on digestion.",
		origin: "East Asia",
		nutritionalHighlights: [
			"Mucus protein",
			"Dietary Fiber",
			"Potassium",
			"Vitamin B group",
		],
		benefitsForThreeHighs: [
			"Mucus protein delays blood sugar rise",
			"Low glycemic load",
			"Fiber regulates lipid metabolism",
			"Supports digestive health to reduce metabolic burden",
		],
		image: "/vegetables/chinese-yam.jpg",
	},
];
