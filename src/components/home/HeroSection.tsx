"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export function HeroSection() {
	const [showVideo, setShowVideo] = useState(true);
	const [videoFading, setVideoFading] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const handleEnded = () => {
			setVideoFading(true);
			setTimeout(() => {
				setShowVideo(false);
			}, 400); 
		};

		video.addEventListener("ended", handleEnded);
		video.play().catch((err) => {
			console.error("视频播放失败:", err);
			setShowVideo(false);
		});

		return () => {
			video.removeEventListener("ended", handleEnded);
		};
	}, []);

	return (
		<section className="relative pb-24 pt-12">
			{showVideo && (
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
						videoFading ? "opacity-0" : "opacity-100"
					}`}
				>
					<video
						ref={videoRef}
						src="/videos/hero_video.mp4"
						className="w-full h-full object-cover"
						muted
						playsInline
						autoPlay
					/>
				</div>
			)}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<img
						src="/images/home/hero.PNG"
						alt="Hero Image"
						className="mx-auto block w-1/2 object-cover"
					/>
					<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
						Discover the nutrition, benefits, and flavor stories behind
						vegetables—because better choices start with clear information.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/vegetables"
							className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
						>
							Explore Vegetables
						</Link>
						<Link
							href="/recipes"
							className="inline-flex items-center justify-center border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
						>
							Seasonal Recipes
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
