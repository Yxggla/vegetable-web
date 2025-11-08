export type NavItem = {
	href: string;
	label: string;
};

export const primaryNavItems: NavItem[] = [
	{ href: "/", label: "Home" },
	{ href: "/vegetables", label: "Vegetables" },
	{ href: "/recipes", label: "Recipes" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];
