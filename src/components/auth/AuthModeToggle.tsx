type Props = {
	mode: "signIn" | "signUp";
	onSwitch: (mode: "signIn" | "signUp") => void;
};

export function AuthModeToggle({ mode, onSwitch }: Props) {
	const isSignIn = mode === "signIn";

	return (
		<div className="text-center text-sm text-gray-600">
			{isSignIn ? (
				<p>
					Don&apos;t have an account?{" "}
					<button
						type="button"
						className="font-medium text-green-600 hover:text-green-700"
						onClick={() => onSwitch("signUp")}
					>
						Create one
					</button>
				</p>
			) : (
				<p>
					Already have an account?{" "}
					<button
						type="button"
						className="font-medium text-green-600 hover:text-green-700"
						onClick={() => onSwitch("signIn")}
					>
						Back to sign in
					</button>
				</p>
			)}
		</div>
	);
}
