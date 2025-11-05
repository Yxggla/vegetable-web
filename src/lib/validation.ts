const emailPattern =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
const passwordPattern =
	/^[A-Za-z\d!@#$%^&*()_+\-=[\]{};':",.<>/?]{6,}$/;

export function validateEmail(value: string) {
	if (!emailPattern.test(value)) {
		return {
			valid: false,
			message: "邮箱格式不正确，请输入有效邮箱地址。",
		};
	}

	return { valid: true, message: "" };
}

export function validateUsername(value: string) {
	if (!usernamePattern.test(value)) {
		return {
			valid: false,
			message: "用户名需为 3-16 位字母、数字或下划线组合。",
		};
	}

	return { valid: true, message: "" };
}

export function validatePassword(value: string) {
	if (!passwordPattern.test(value)) {
		return {
			valid: false,
			message: "密码至少 6 位，可包含字母、数字和常见符号。",
		};
	}

	return { valid: true, message: "" };
}
