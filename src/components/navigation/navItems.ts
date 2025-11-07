export type NavItem = {
	href: string;
	label: string;
};

export const primaryNavItems: NavItem[] = [
	{ href: "/", label: "Home" },
	{ href: "/vegetables", label: "Vegetables" },
	{ href: "/about", label: "About" },
	{ href: "/recipes", label: "Recipes" },
	{ href: "/contact", label: "Contact" },
];
