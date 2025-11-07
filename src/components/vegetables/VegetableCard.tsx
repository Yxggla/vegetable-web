"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Vegetable } from "@/data/vegetables";
import { useVegetableStore } from "@/store/vegetableStore";
import { useAuthStore } from "@/store/authStore";
import {
	addFavoriteVegetable,
	removeFavoriteVegetable,
} from "@/lib/vegetableApi";

type Props = {
	item: Vegetable;
};

export function VegetableCard({ item }: Props) {
	const router = useRouter();
	const user = useAuthStore((state) => state.user);
	const favorites = useVegetableStore((state) => state.favorites);
	const addFavorite = useVegetableStore((state) => state.addFavorite);
	const removeFavorite = useVegetableStore((state) => state.removeFavorite);
	const isFavorite = favorites.includes(item.slug);
	const [pending, setPending] = useState(false);

	const handleFavoriteClick = async () => {
		if (!user) {
			router.push("/login");
			return;
		}

		if (!item.id || pending) {
			return;
		}

		setPending(true);
		try {
			if (isFavorite) {
				await removeFavoriteVegetable(user.id, item.id);
				removeFavorite(item.slug);
			} else {
				await addFavoriteVegetable(user.id, item.id);
				addFavorite(item.slug);
			}
		} catch (error) {
			console.error("Failed to update favorite", error);
		} finally {
			setPending(false);
		}
	};

	return (
		<article className="group flex flex-col overflow-hidden rounded-3xl border border-green-100 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
			<div className="relative h-48 w-full overflow-hidden bg-green-50">
				<Image
					src={item.image}
					alt={item.name}
					fill
					className="object-cover transition duration-500 group-hover:scale-105"
				/>
				<button
					type="button"
					onClick={handleFavoriteClick}
					disabled={pending}
					className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-sm transition hover:bg-white"
					aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
				>
					<svg
						className={`h-5 w-5 ${
							isFavorite ? "fill-green-500 text-green-500" : "text-gray-400"
						}`}
						viewBox="0 0 24 24"
						stroke="currentColor"
						fill="none"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.8}
							d="M11.48 3.499a3.176 3.176 0 011.04 1.96c.06.497.67.69 1.05.338a3.5 3.5 0 014.88.185c1.26 1.33 1.33 3.417.21 4.84l-1.24 1.64c-.41.55-.44 1.295-.08 1.87l.19.31c.73 1.18.6 2.69-.31 3.71a2.989 2.989 0 01-3.9.51l-1.23-.79a1.23 1.23 0 00-1.32 0l-1.23.79a2.989 2.989 0 01-3.9-.51 2.993 2.993 0 01-.31-3.71l.19-.31c.36-.575.33-1.32-.08-1.87l-1.24-1.64c-1.12-1.423-1.05-3.51.21-4.84a3.5 3.5 0 014.88-.185c.38.352.99.159 1.05-.338a3.176 3.176 0 011.04-1.96 1.5 1.5 0 012.04 0z"
						/>
					</svg>
				</button>
			</div>
			<div className="flex flex-1 flex-col space-y-4 p-6">
				<div className="space-y-1">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
						<span className="rounded-full border border-green-200 px-3 py-1 text-xs font-semibold text-green-600">
							{item.category}
						</span>
					</div>
					<p className="text-sm text-gray-500">{item.origin}</p>
				</div>
				<p className="flex-1 text-sm leading-6 text-gray-600">
					{item.description}
				</p>
				<div className="space-y-2">
					<p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
						Nutritional highlights
					</p>
					<ul className="flex flex-wrap gap-2 text-xs">
						{item.nutritionalHighlights.map((highlight) => (
							<li
								key={highlight}
								className="rounded-full border border-green-100 bg-green-50 px-3 py-1 font-medium text-green-700"
							>
								{highlight}
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center justify-between text-xs font-medium text-gray-500">
					<span>
					{item.seasons.join(" • ")}
					</span>
					{isFavorite ? (
						<span className="text-green-600">In favorites</span>
					) : (
						<span>Add to favorites</span>
					)}
				</div>
			</div>
		</article>
	);
}
