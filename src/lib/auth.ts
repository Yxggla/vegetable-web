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
		throw new Error(`Failed to check username: ${usernameError.message}`);
	}

	if (usernameRecords && usernameRecords.length > 0) {
		throw new Error("Username already exists. Try another option.");
	}

	const { data: emailRecords, error: emailError } = await supabase
		.from(USERS_TABLE)
		.select("id")
		.eq("email", email)
		.limit(1);

	if (emailError) {
		throw new Error(`Failed to check email: ${emailError.message}`);
	}

	if (emailRecords && emailRecords.length > 0) {
		throw new Error("Email already exists. Try another email address.");
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
		throw new Error(`Registration failed: ${error.message}`);
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
		throw new Error(`Sign-in failed: ${error.message}`);
	}

	if (!data) {
		throw new Error("We could not find an account with that email.");
	}

	const isMatch = await bcrypt.compare(password, data.password_hash);

	if (!isMatch) {
		throw new Error("Incorrect password. Please try again.");
	}

	const { password_hash: _, ...user } = data;

	return user;
}
