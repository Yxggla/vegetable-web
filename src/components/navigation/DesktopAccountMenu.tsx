"use client";

import { useEffect, useRef, useState } from "react";

type DesktopAccountMenuProps = {
	username: string;
	initial: string;
	onSignOut: () => void;
};

export function DesktopAccountMenu({
	username,
	initial,
	onSignOut,
}: DesktopAccountMenuProps) {
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!open) {
			return;
		}

		const handleClick = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [open]);

	return (
		<div className="relative" ref={menuRef}>
			<button
				type="button"
				onClick={() => setOpen((value) => !value)}
				className="flex items-center space-x-3 rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-green-100"
				aria-haspopup="true"
				aria-expanded={open}
			>
				<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
					{initial}
				</span>
				<span>{username}</span>
				<svg
					className={`h-4 w-4 text-green-600 transition-transform ${
						open ? "rotate-180" : ""
					}`}
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			{open ? (
				<div className="absolute right-0 mt-3 w-44 rounded-xl border border-green-100 bg-white/95 p-2 text-sm shadow-lg">
					<button
						type="button"
						onClick={() => {
							onSignOut();
							setOpen(false);
						}}
						className="block w-full rounded-lg px-3 py-2 text-left font-medium text-green-600 transition-colors hover:bg-green-50"
					>
						Sign out
					</button>
				</div>
			) : null}
		</div>
	);
}
