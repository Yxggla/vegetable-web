import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { CtaSection } from "@/components/home/CtaSection";

const contactPoints = [
	{
		title: "商务合作",
		details: "partnerships@vegetableweb.com",
		description: "拓展渠道、品牌联合、园区共建等合作机会。",
	},
	{
		title: "媒体联系",
		details: "press@vegetableweb.com",
		description: "采访、媒体报道与演讲邀请。",
	},
	{
		title: "客服支持",
		details: "support@vegetableweb.com",
		description: "部署进度、售后服务与技术支援。",
	},
];

export default function ContactPage() {
	return (
		<ModulePageShell
			title="联系我们"
			description="留下需求与想法，我们的团队会在一个工作日内回复。"
		>
			<section className="py-16">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-6">
						{contactPoints.map((item) => (
							<div
								key={item.title}
								className="rounded-2xl border border-green-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm"
							>
								<h3 className="text-lg font-semibold text-gray-900">
									{item.title}
								</h3>
								<p className="mt-2 text-sm text-green-700 font-medium">
									{item.details}
								</p>
								<p className="mt-3 text-sm text-gray-600">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<CtaSection />
		</ModulePageShell>
	);
}
