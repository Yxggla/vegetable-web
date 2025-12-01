export function CtaSection() {
	return (
		<section className="py-20">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="rounded-3xl bg-gradient-to-br from-green-600 via-green-700 to-blue-700 p-10 text-white shadow-xl">
					<div className="md:flex md:items-center md:justify-between">
						<div className="max-w-xl">
							<h2 className="text-3xl font-bold">
								Get weekly veggie insights
							</h2>
							<p className="mt-3 text-green-100">
								Short emails with Seasonal Vegetables, nutrition callouts, and
								plain-language benefits. No ads, no sales.
							</p>
						</div>
						<form className="mt-8 md:mt-0 md:w-80 space-y-3">
							<label htmlFor="email" className="sr-only">
								Email address
							</label>
							<input
								id="email"
								type="email"
								required
								placeholder="you@company.com"
								className="w-full rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-sm placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white"
							/>
							<label htmlFor="volume" className="sr-only">
								Monthly volume
							</label>
							<input
								id="volume"
								type="text"
								placeholder="Monthly produce volume"
								className="w-full rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-sm placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white"
							/>
							<button
								type="submit"
								className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-50 transition-colors"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
