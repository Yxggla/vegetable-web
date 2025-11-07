export function VegetablePageSkeleton() {
	return (
		<div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
			<div className="space-y-4 rounded-3xl border border-green-100 bg-white/80 p-6 shadow-sm">
				<div className="space-y-2">
					<div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
					<div className="h-6 w-40 animate-pulse rounded bg-gray-100" />
				</div>
				{Array.from({ length: 3 }).map((_, index) => (
					<div key={index} className="space-y-1">
						<div className="h-4 w-32 animate-pulse rounded bg-gray-100" />
						<div className="h-10 w-full animate-pulse rounded-lg bg-gray-100" />
					</div>
					))}
			</div>
			<div className="space-y-6">
				<div className="space-y-2">
					<div className="h-6 w-48 animate-pulse rounded bg-gray-100" />
					<div className="h-4 w-64 animate-pulse rounded bg-gray-100" />
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
		</div>
	);
}
