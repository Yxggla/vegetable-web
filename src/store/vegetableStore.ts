"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type VegetableFilters = {
	category: string;
	season: string;
	search: string;
};

type VegetableState = {
	favorites: string[];
	filters: VegetableFilters;
	toggleFavorite: (slug: string) => void;
	clearFilters: () => void;
	updateFilters: (filters: Partial<VegetableFilters>) => void;
};

const defaultFilters: VegetableFilters = {
	category: "All",
	season: "All",
	search: "",
};

export const useVegetableStore = create<VegetableState>()(
	persist(
		(set, get) => ({
			favorites: [],
			filters: defaultFilters,
			toggleFavorite: (slug) => {
				const favorites = get().favorites;
				const exists = favorites.includes(slug);
				set({
					favorites: exists
						? favorites.filter((item) => item !== slug)
						: [...favorites, slug],
				});
			},
			clearFilters: () => set({ filters: defaultFilters }),
			updateFilters: (filters) =>
				set((state) => ({
					filters: { ...state.filters, ...filters },
				})),
		}),
		{
			name: "vegetableweb:vegetables",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
