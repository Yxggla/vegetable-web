"use client";

import { useVegetableStore } from "@/store/vegetableStore";

export function NoResults() {
	const clearFilters = useVegetableStore((state) => state.clearFilters);

	return (
		<div className="flex flex-col items-center justify-center space-y-4 rounded-3xl border border-dashed border-green-200 bg-white/70 px-8 py-16 text-center text-sm text-gray-600">
			<svg
				className="h-10 w-10 text-green-400"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M12 21c-4.5-2-9-6-9-11a9 9 0 1118 0c0 5-4.5 9-9 11z"
				/>
				<circle cx="9" cy="9" r="1" />
				<circle cx="15" cy="9" r="1" />
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 14c-1.5 1-3.5 1-5 0" />
			</svg>
			<div className="space-y-1">
				<p className="text-base font-semibold text-gray-900">
					No vegetables match your filters
				</p>
				<p>Try adjusting the filters or search for another cultivar.</p>
			</div>
			<button
				type="button"
				onClick={clearFilters}
				className="rounded-full border border-green-200 px-4 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-50"
			>
				Reset filters
			</button>
		</div>
	);
}
