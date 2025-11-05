import bcrypt from "bcryptjs";
import { supabase } from "./supabase";

const USERS_TABLE = "users";

type RegisterPayload = {
	username: string;
	email: string;
	password: string;
};

type LoginPayload = {
	email: string;
	password: string;
};

type PublicUser = {
	id: string;
	username: string;
	email: string;
};

async function checkExistingUser(username: string, email: string) {
	const { data: usernameRecords, error: usernameError } = await supabase
		.from(USERS_TABLE)
		.select("id")
		.eq("username", username)
		.limit(1);

	if (usernameError) {
		throw new Error(`检查用户名时出错：${usernameError.message}`);
	}

	if (usernameRecords && usernameRecords.length > 0) {
		throw new Error("用户名已被注册，请尝试其他名称。");
	}

	const { data: emailRecords, error: emailError } = await supabase
		.from(USERS_TABLE)
		.select("id")
		.eq("email", email)
		.limit(1);

	if (emailError) {
		throw new Error(`检查邮箱时出错：${emailError.message}`);
	}

	if (emailRecords && emailRecords.length > 0) {
		throw new Error("邮箱已被注册，请尝试其他邮箱。");
	}
}

export async function registerUser(payload: RegisterPayload) {
	const { username, email, password } = payload;

	await checkExistingUser(username, email);

	const passwordHash = await bcrypt.hash(password, 10);

	const { error } = await supabase.from(USERS_TABLE).insert({
		username,
		email,
		password_hash: passwordHash,
	});

	if (error) {
		throw new Error(`注册失败：${error.message}`);
	}
}

export async function loginUser(payload: LoginPayload): Promise<PublicUser> {
	const { email, password } = payload;

	const { data, error } = await supabase
		.from(USERS_TABLE)
		.select("id, username, email, password_hash")
		.eq("email", email)
		.maybeSingle();

	if (error) {
		throw new Error(`登录失败：${error.message}`);
	}

	if (!data) {
		throw new Error("未找到对应账号，请确认邮箱后再试。");
	}

	const isMatch = await bcrypt.compare(password, data.password_hash);

	if (!isMatch) {
		throw new Error("密码错误，请重新输入。");
	}

	const { password_hash: _, ...user } = data;

	return user;
}
