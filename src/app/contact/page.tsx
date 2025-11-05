import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { CtaSection } from "@/components/home/CtaSection";

const contactPoints = [
	{
		title: "Partnerships",
		details: "partnerships@vegetableweb.com",
		description: "Channel expansion, co-branded initiatives, and campus deployment opportunities.",
	},
	{
		title: "Press",
		details: "press@vegetableweb.com",
		description: "Interviews, media inquiries, and speaking engagements.",
	},
	{
		title: "Support",
		details: "support@vegetableweb.com",
		description: "Deployment updates, post-launch service, and technical assistance.",
	},
];

export default function ContactPage() {
	return (
		<ModulePageShell
			title="Contact"
			description="Send us your request and our team will respond within one business day."
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
