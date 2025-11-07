import { Suspense } from "react";
import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { UserFavoritesPanel } from "@/components/account/UserFavoritesPanel";
import { UserFavoritesSkeleton } from "@/components/account/UserFavoritesSkeleton";

export default function AccountPage() {
	return (
		<ModulePageShell
			title="Your seasonal collection"
			description="Review vegetables you've saved, adjust plans, and sync with your kitchen or farm teams."
		>
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<Suspense fallback={<UserFavoritesSkeleton />}>
						<UserFavoritesPanel />
					</Suspense>
				</div>
			</section>
		</ModulePageShell>
	);
}
