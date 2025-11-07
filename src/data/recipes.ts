export type WeeklyRecipe = {
	dow: string;
	theme: string;
	spotlight: string;
	description: string;
	featuredVegetables: string[];
	tips: string;
};

export const weeklyRecipes: WeeklyRecipe[] = [
	{
		dow: "Monday",
		theme: "Iron-rich reset",
		spotlight: "Spinach & Chickpea Warm Salad",
		description:
			"Baby spinach, roasted chickpeas, and shaved fennel tossed with a citrus tahini dressing to jump-start the week with minerals and fiber.",
		featuredVegetables: ["Spinach", "Chickpea", "Fennel"],
		tips: "Toast the chickpeas with smoked paprika for crunch and prep extra dressing for tomorrow's lunch.",
	},
	{
		dow: "Tuesday",
		theme: "Glow bowl",
		spotlight: "Roasted Beetroot & Kale Farro",
		description:
			"Sweet beets, marinated kale, and citrus segments over nutty farro keep antioxidants high mid-week.",
		featuredVegetables: ["Beetroot", "Kale", "Orange"],
		tips: "Massage the kale with lemon juice to soften and store refrigerated for 3 days.",
	},
	{
		dow: "Wednesday",
		theme: "Midweek comfort",
		spotlight: "Broccoli Pesto Pasta",
		description:
			"Light cashew pesto blended with blanched broccoli florets coats whole-grain pasta for a creamy yet dairy-light dinner.",
		featuredVegetables: ["Broccoli", "Garlic", "Basil"],
		tips: "Reserve pasta water to thin the pesto and add extra broccoli for lunch leftovers.",
	},
	{
		dow: "Thursday",
		theme: "Gut-friendly broth",
		spotlight: "Carrot & Ginger Miso Soup",
		description:
			"Caramelized carrots simmered with ginger, scallions, and white miso—served with soba and edamame for protein.",
		featuredVegetables: ["Carrot", "Scallion", "Ginger"],
		tips: "Blend half the soup for creaminess and freeze a portion for an easy weekend lunch.",
	},
	{
		dow: "Friday",
		theme: "Sheet-pan ease",
		spotlight: "Cauliflower & Snap Pea Tikka",
		description:
			"Yogurt-marinated cauliflower florets roast alongside snap peas and cherry tomatoes for a fast, spice-forward supper.",
		featuredVegetables: ["Cauliflower", "Snap pea", "Tomato"],
		tips: "Serve over brown basmati and save leftovers for a Friday night wrap.",
	},
	{
		dow: "Saturday",
		theme: "Brunch energy",
		spotlight: "Garden Frittata Stack",
		description:
			"Eggplant, kale, and cherry tomatoes bake into a tall frittata slice paired with garlicky yogurt and herbs.",
		featuredVegetables: ["Eggplant", "Kale", "Tomato"],
		tips: "Bake in a square pan and portion for grab-and-go breakfasts.",
	},
	{
		dow: "Sunday",
		theme: "Batch-prep bowls",
		spotlight: "Legume & Allium Power Bowl",
		description:
			"Chickpeas, roasted garlic, and charred scallions over quinoa with pickled carrot ribbons and tahini drizzle—perfect for Monday meal prep.",
		featuredVegetables: ["Chickpea", "Garlic", "Scallion", "Carrot"],
		tips: "Pickle extra carrots and store grains separately to keep textures fresh.",
	},
];
