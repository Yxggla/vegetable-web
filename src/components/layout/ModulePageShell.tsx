import { ReactNode } from "react";
import { HomeNav } from "@/components/home/HomeNav";
import { SiteFooter } from "@/components/home/SiteFooter";

type ModulePageShellProps = {
	title: string;
	description: string;
	children: ReactNode;
	showHeader?: boolean;
};

export function ModulePageShell({
	title,
	description,
	children,
	showHeader = true,
}: ModulePageShellProps) {
	return (
		<div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50">
			<HomeNav />
			{showHeader ? (
				<header className="border-b border-green-100 bg-white/70 backdrop-blur">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
						<p className="text-sm font-semibold text-green-600 uppercase tracking-wider">
							VegetableWeb
						</p>
						<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
							{title}
						</h1>
						<p className="text-base md:text-lg text-gray-600">
							{description}
						</p>
					</div>
				</header>
			) : null}
			<main className="pb-20">{children}</main>
			<SiteFooter />
		</div>
	);
}
