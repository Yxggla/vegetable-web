"use client";

import { useMemo } from "react";
import { Vegetable } from "@/data/vegetables";
import { useVegetableStore } from "@/store/vegetableStore";
import { VegetableCard } from "./VegetableCard";
import { NoResults } from "./VegetableNoResults";

type Props = {
	items: Vegetable[];
};

export function VegetableGrid({ items }: Props) {
	const filters = useVegetableStore((state) => state.filters);

	const filtered = useMemo(() => {
		return items.filter((item) => {
			const matchesCategory =
				filters.category === "All" || item.category === filters.category;
			const matchesSeason =
				filters.season === "All" || item.seasons.includes(filters.season);
			const query = filters.search.trim().toLowerCase();
			const matchesSearch =
				query.length === 0 ||
				item.name.toLowerCase().includes(query) ||
				item.origin.toLowerCase().includes(query);

			return matchesCategory && matchesSeason && matchesSearch;
		});
	}, [filters, items]);

	if (filtered.length === 0) {
		return <NoResults />;
	}

	return (
		<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
			{filtered.map((item) => (
				<VegetableCard key={item.slug} item={item} />
			))}
		</div>
	);
}
