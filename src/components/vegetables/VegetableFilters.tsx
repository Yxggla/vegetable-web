"use client";

import { useMemo } from "react";
import { useVegetableStore } from "@/store/vegetableStore";
import {
	Vegetable,
	VegetableCategory,
	GrowingSeason,
} from "@/data/vegetables";

type Props = {
	items: Vegetable[];
};

const categoryOptions: Array<VegetableCategory | "All"> = [
	"All",
	"Leafy greens",
	"Roots",
	"Cruciferous",
	"Nightshades",
	"Legumes",
	"Alliums",
];

const seasonOptions: Array<GrowingSeason | "All"> = [
	"All",
	"Spring",
	"Summer",
	"Autumn",
	"Winter",
];

export function VegetableFilters({ items }: Props) {
	const filters = useVegetableStore((state) => state.filters);
	const updateFilters = useVegetableStore((state) => state.updateFilters);
	const clearFilters = useVegetableStore((state) => state.clearFilters);

	const stats = useMemo(() => {
		const uniqueOrigins = new Set(items.map((item) => item.origin));
		return {
			total: items.length,
			origins: uniqueOrigins.size,
		};
	}, [items]);

	return (
		<aside className="space-y-6 rounded-3xl border border-green-100 bg-white/80 p-6 shadow-sm backdrop-blur">
			<div>
				<h2 className="text-xl font-semibold text-gray-900">Filters</h2>
				<p className="text-sm text-gray-500">
					Explore {stats.total} cultivars across {stats.origins} growing regions.
				</p>
			</div>

			<div className="space-y-4">
				<label className="block text-sm font-medium text-gray-700">
					Search
					<input
						type="search"
						value={filters.search}
						onChange={(event) =>
							updateFilters({ search: event.target.value })
						}
						placeholder="Search by name or origin"
						className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm shadow-sm transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/40"
					/>
				</label>

				<label className="block text-sm font-medium text-gray-700">
					Category
					<select
						value={filters.category}
						onChange={(event) => updateFilters({ category: event.target.value })}
						className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm shadow-sm transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/40"
					>
						{categoryOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</label>

				<label className="block text-sm font-medium text-gray-700">
					Season
					<select
						value={filters.season}
						onChange={(event) => updateFilters({ season: event.target.value })}
						className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm shadow-sm transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/40"
					>
						{seasonOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</label>
			</div>

			<button
				type="button"
				onClick={clearFilters}
				className="w-full rounded-lg border border-green-200 px-3 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-50"
			>
				Reset filters
			</button>
		</aside>
	);
}
