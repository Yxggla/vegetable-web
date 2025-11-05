import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
	return (
		<ModulePageShell
			title="账户登录"
			description="登录 VegetableWeb，管理您的城市农场部署与订阅。"
			showHeader={false}
		>
			<section className="py-20">
				<div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] items-start px-4 sm:px-6 lg:px-8">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold text-gray-900">账户登录</h1>
						<p className="text-base text-gray-600">
							登录 VegetableWeb，管理您的城市农场部署与订阅。保持与团队同步，实时掌握种植与配送计划。
						</p>
					</div>
					<LoginForm />
				</div>
			</section>
		</ModulePageShell>
	);
}
