import { ModulePageShell } from "@/components/layout/ModulePageShell";
import { AboutSection } from "@/components/home/AboutSection";
import { ImpactSection } from "@/components/home/ImpactSection";
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

export default function AboutPage() {
	return (
		<ModulePageShell
			title="About VegetableWeb"
			description="Learn about our mission, team, and urban agriculture blueprint behind every fresh harvest."
		>
			<div className="space-y-16">
				<AboutSection />
				<ImpactSection />
				<section className="py-6">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="mb-10 text-center">
							<h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
							<p className="mt-3 text-lg text-gray-600">
								Send us your request and our team will respond within one business day.
							</p>
						</div>
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
			</div>
		</ModulePageShell>
	);
}
