"use client";

import { useMemo } from "react";
import { useVegetableStore } from "@/store/vegetableStore";
import { Vegetable, VegetableCategory, GrowingSeason } from "@/data/vegetables";

type Props = {
	items: Vegetable[];
};

type Option<T> = {
	value: T;
	label: string;
};

const categoryOptions: Array<Option<VegetableCategory | "All">> = [
	{ value: "All", label: "All categories" },
	{ value: "Leafy greens", label: "Leafy greens" },
	{ value: "Cruciferous vegetables", label: "Cruciferous vegetables" },
	{ value: "Cucurbitaceous vegetables", label: "Cucurbitaceous vegetables" },
	{ value: "Allium vegetables", label: "Allium vegetables" },
	{ value: "Edible fungi", label: "Edible fungi" },
	{ value: "Root vegetables", label: "Root vegetables" },
];

const seasonOptions: Array<Option<GrowingSeason | "All">> = [
	{ value: "All", label: "All seasons" },
	{ value: "Spring", label: "Spring" },
	{ value: "Summer", label: "Summer" },
	{ value: "Autumn", label: "Autumn" },
	{ value: "Winter", label: "Winter" },
	{ value: "All year round", label: "Year-round" },
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

	const selectClassName =
		"mt-1 block w-full rounded-2xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 appearance-none";

	return (
		<aside className="space-y-6 rounded-[32px] border border-green-100 bg-white/80 p-6 shadow-sm backdrop-blur">
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
					placeholder="Search by English/Chinese name or origin"
					className="mt-1 block w-full rounded-2xl border border-gray-200 px-4 py-2.5 text-sm shadow-sm transition focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30"
				/>
			</label>

			<label className="block text-sm font-medium text-gray-700">
				Category
				<div className="relative">
					<select
						value={filters.category}
						onChange={(event) => updateFilters({ category: event.target.value })}
						className={`${selectClassName} pr-10`}
					>
						{categoryOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<svg
						className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</label>

			<label className="block text-sm font-medium text-gray-700">
				Season
				<div className="relative">
					<select
						value={filters.season}
						onChange={(event) => updateFilters({ season: event.target.value })}
						className={`${selectClassName} pr-10`}
					>
						{seasonOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<svg
						className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
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
