import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
	return (
		<ModulePageShell
			title="Account sign in"
			description="Sign in to VegetableWeb to manage your urban farm deployments and subscriptions."
			showHeader={false}
		>
			<section className="py-20">
				<div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] items-start px-4 sm:px-6 lg:px-8">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold text-gray-900">Account sign in</h1>
						<p className="text-base text-gray-600">
							Sign in to stay aligned with your team, track crop performance, and adjust delivery schedules in real time.
						</p>
					</div>
					<LoginForm />
				</div>
			</section>
		</ModulePageShell>
	);
}
