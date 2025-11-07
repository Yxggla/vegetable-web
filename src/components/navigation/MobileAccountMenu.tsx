"use client";

import Link from "next/link";
import { useState } from "react";

type MobileAccountMenuProps = {
	username: string;
	initial: string;
	onSignOut: () => void;
};

export function MobileAccountMenu({
	username,
	initial,
	onSignOut,
}: MobileAccountMenuProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="rounded-lg border border-green-100 bg-green-50 px-4 py-3 shadow-sm">
			<button
				type="button"
				onClick={() => setOpen((value) => !value)}
				className="flex w-full items-center justify-between"
			>
				<div className="flex items-center space-x-3">
					<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white">
						{initial}
					</span>
					<div className="text-left">
						<p className="text-base font-semibold text-green-700">
							{username}
						</p>
						<p className="text-xs text-gray-500">Tap to view account actions</p>
					</div>
				</div>
				<svg
					className={`h-5 w-5 text-green-600 transition-transform ${
						open ? "rotate-180" : ""
					}`}
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			{open ? (
				<div className="mt-3 space-y-2 border-t border-green-100 pt-3">
					<Link
						href="/account"
						onClick={() => setOpen(false)}
						className="block w-full rounded-md border border-green-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-green-100 hover:text-green-700"
					>
						View account
					</Link>
					<button
						type="button"
						onClick={onSignOut}
						className="block w-full rounded-md border border-green-200 px-3 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-100"
					>
						Sign out
					</button>
				</div>
			) : null}
		</div>
	);
}
