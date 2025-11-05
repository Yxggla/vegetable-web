const emailPattern =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
const passwordPattern =
	/^[A-Za-z\d!@#$%^&*()_+\-=[\]{};':",.<>/?]{6,}$/;

export function validateEmail(value: string) {
	if (!emailPattern.test(value)) {
		return {
			valid: false,
			message: "Enter a valid email address.",
		};
	}

	return { valid: true, message: "" };
}

export function validateUsername(value: string) {
	if (!usernamePattern.test(value)) {
		return {
			valid: false,
			message: "Username must be 3-16 characters using letters, numbers, or underscores.",
		};
	}

	return { valid: true, message: "" };
}

export function validatePassword(value: string) {
	if (!passwordPattern.test(value)) {
		return {
			valid: false,
			message: "Password must be at least 6 characters and may include letters, numbers, or symbols.",
		};
	}

	return { valid: true, message: "" };
}
