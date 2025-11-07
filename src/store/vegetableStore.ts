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
	setFavorites: (slugs: string[]) => void;
	addFavorite: (slug: string) => void;
	removeFavorite: (slug: string) => void;
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
			setFavorites: (slugs) => set({ favorites: slugs }),
			addFavorite: (slug) => {
				const favorites = get().favorites;
				if (favorites.includes(slug)) {
					return;
				}
				set({ favorites: [...favorites, slug] });
			},
			removeFavorite: (slug) => {
				set({ favorites: get().favorites.filter((item) => item !== slug) });
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
