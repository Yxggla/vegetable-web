"use client";

import { useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import { VegetableCard } from "@/components/vegetables/VegetableCard";
import { UserFavoritesSkeleton } from "@/components/account/UserFavoritesSkeleton";
import { fetchFavoriteVegetables } from "@/lib/vegetableApi";
import type { Vegetable } from "@/data/vegetables";
import { useAuthStore } from "@/store/authStore";
import { useVegetableStore } from "@/store/vegetableStore";

type FavoritesState = {
	status: "idle" | "loading" | "ready" | "error";
	items: Vegetable[];
	error: string | null;
};

type FavoritesAction =
	| { type: "loading" }
	| { type: "success"; payload: Vegetable[] }
	| { type: "error"; payload: string }
	| { type: "reset" }
	| { type: "remove"; payload: string };

const initialState: FavoritesState = {
	status: "idle",
	items: [],
	error: null,
};

function favoritesReducer(
	state: FavoritesState,
	action: FavoritesAction,
): FavoritesState {
	switch (action.type) {
		case "loading":
			return { status: "loading", items: [], error: null };
		case "success":
			return { status: "ready", items: action.payload, error: null };
		case "error":
			return { status: "error", items: [], error: action.payload };
		case "reset":
			return initialState;
		case "remove":
			return {
				...state,
				status: "ready",
				items: state.items.filter((item) => item.slug !== action.payload),
			};
		default:
			return state;
	}
}

export function UserFavoritesPanel() {
	const router = useRouter();
	const user = useAuthStore((state) => state.user);
	const setFavorites = useVegetableStore((state) => state.setFavorites);
	const [state, dispatch] = useReducer(favoritesReducer, initialState);

	const handleFavoriteChange = (slug: string, isFavorite: boolean) => {
		if (!isFavorite) {
			dispatch({ type: "remove", payload: slug });
		}
	};

	useEffect(() => {
		if (!user) {
			dispatch({ type: "reset" });
			setFavorites([]);
			router.replace("/login");
			return;
		}

		let isMounted = true;
		dispatch({ type: "loading" });

		fetchFavoriteVegetables(user.id)
			.then((items) => {
				if (!isMounted) return;
				dispatch({ type: "success", payload: items });
				setFavorites(items.map((item) => item.slug));
			})
			.catch((fetchError) => {
				if (!isMounted) return;
				dispatch({
					type: "error",
					payload:
						fetchError instanceof Error
							? fetchError.message
							: "Failed to load favorites.",
				});
			});

		return () => {
			isMounted = false;
		};
	}, [user, router, setFavorites]);

	if (!user) {
		return (
			<div className="rounded-2xl border border-green-100 bg-white/80 p-8 text-center text-sm text-gray-500 shadow-sm">
				Redirecting to the login page...
			</div>
		);
	}

	if (state.status === "loading" || state.status === "idle") {
		return <UserFavoritesSkeleton />;
	}

	if (state.status === "error" && state.error) {
		return (
			<div className="rounded-2xl border border-red-100 bg-white/80 p-8 text-center text-sm text-red-600 shadow-sm">
				{state.error}
			</div>
		);
	}

	if (state.items.length === 0) {
		return (
			<div className="rounded-2xl border border-green-100 bg-white/80 p-8 text-center shadow-sm">
				<p className="text-lg font-semibold text-gray-900">No favorites yet</p>
				<p className="mt-2 text-sm text-gray-600">
					Start exploring seasonal cultivars and tap the heart icon to collect your
					favorites here.
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<div className="flex flex-col gap-2 text-gray-700">
				<p className="text-sm uppercase font-semibold tracking-wide text-green-600">
					Favorites overview
				</p>
				<h2 className="text-2xl font-bold text-gray-900">
					Saved cultivars ({state.items.length})
				</h2>
				<p className="text-sm text-gray-600">
					These are synced from Supabase for {user.username}. Remove a favorite by
					clicking the heart again on the atlas page.
				</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
				{state.items.map((item) => (
					<VegetableCard
						key={item.slug}
						item={item}
						onFavoriteChange={handleFavoriteChange}
					/>
				))}
			</div>
		</div>
	);
}
