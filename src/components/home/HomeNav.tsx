"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = {
	href: string;
	label: string;
};

const navItems: NavItem[] = [
	{ href: "#about", label: "About" },
	{ href: "#technology", label: "Technology" },
	{ href: "#impact", label: "Impact" },
	{ href: "#products", label: "Products" },
	{ href: "#testimonials", label: "Testimonials" },
	{ href: "#contact", label: "Contact" },
];

export function HomeNav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<h1 className="text-2xl font-bold text-green-600">
								VegetableWeb
							</h1>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
								>
									{item.label}
								</Link>
							))}
							<Link
								href="#contact"
								className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors shadow-sm"
							>
								Request Demo
							</Link>
						</div>
					</div>
					<div className="md:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen((open) => !open)}
							className="text-gray-700 hover:text-green-600"
							aria-label="Toggle navigation"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{mobileMenuOpen ? (
				<div className="md:hidden border-t border-green-100 bg-white/95 backdrop-blur">
					<div className="px-4 pt-4 pb-6 space-y-2">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setMobileMenuOpen(false)}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
							>
								{item.label}
							</Link>
						))}
						<Link
							href="#contact"
							onClick={() => setMobileMenuOpen(false)}
							className="block text-center rounded-md px-3 py-2 text-base font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
						>
							Request Demo
						</Link>
					</div>
				</div>
			) : null}
		</nav>
	);
}
