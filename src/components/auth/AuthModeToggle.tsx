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
					还没有账号？{" "}
					<button
						type="button"
						className="font-medium text-green-600 hover:text-green-700"
						onClick={() => onSwitch("signUp")}
					>
						立即注册
					</button>
				</p>
			) : (
				<p>
					已经有账号？{" "}
					<button
						type="button"
						className="font-medium text-green-600 hover:text-green-700"
						onClick={() => onSwitch("signIn")}
					>
						返回登录
					</button>
				</p>
			)}
		</div>
	);
}
