export function UserFavoritesSkeleton() {
	return (
		<div className="space-y-6">
			<div className="space-y-2">
				<div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
				<div className="h-8 w-64 animate-pulse rounded bg-gray-100" />
				<div className="h-4 w-72 animate-pulse rounded bg-gray-100" />
			</div>
			<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
				{Array.from({ length: 6 }).map((_, index) => (
					<div
						key={index}
						className="h-72 animate-pulse rounded-3xl border border-green-100 bg-white/70"
					/>
				))}
			</div>
		</div>
	);
}
