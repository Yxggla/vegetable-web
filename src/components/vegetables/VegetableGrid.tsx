"use client";

import { useEffect, useMemo } from "react";
import { Vegetable } from "@/data/vegetables";
import { useVegetableStore } from "@/store/vegetableStore";
import { useAuthStore } from "@/store/authStore";
import { fetchFavoriteSlugs } from "@/lib/vegetableApi";
import { VegetableCard } from "./VegetableCard";
import { NoResults } from "./VegetableNoResults";

type Props = {
	items: Vegetable[];
};

export function VegetableGrid({ items }: Props) {
	const filters = useVegetableStore((state) => state.filters);
	const setFavorites = useVegetableStore((state) => state.setFavorites);
	const user = useAuthStore((state) => state.user);

	useEffect(() => {
		let isMounted = true;

		if (!user) {
			setFavorites([]);
			return () => {
				isMounted = false;
			};
		}

		fetchFavoriteSlugs(user.id)
			.then((slugs) => {
				if (!isMounted) return;
				setFavorites(slugs);
			})
			.catch((error) => {
				if (!isMounted) return;
				console.error("Failed to fetch favorites", error);
			});

		return () => {
			isMounted = false;
		};
	}, [user, setFavorites]);

		const filtered = useMemo(() => {
			return items.filter((item) => {
				const matchesCategory =
					filters.category === "All" || item.category === filters.category;
				const matchesSeason =
					filters.season === "All"
						? true
						: item.seasons.includes(filters.season);
				const query = filters.search.trim().toLowerCase();
				const searchableFields = [
					item.name,
					item.chineseName,
					item.origin,
					item.description,
					item.category,
					...item.nutritionalHighlights,
					...item.benefitsForThreeHighs,
				];
				const matchesSearch =
					query.length === 0 ||
					searchableFields.some((field) =>
						field.toLowerCase().includes(query),
					);

				return matchesCategory && matchesSeason && matchesSearch;
			});
		}, [filters, items]);

	if (filtered.length === 0) {
		return <NoResults />;
	}

	return (
		<div className="grid gap-6 md:grid-cols-2">
			{filtered.map((item) => (
				<VegetableCard key={item.slug} item={item} />
			))}
		</div>
	);
}
