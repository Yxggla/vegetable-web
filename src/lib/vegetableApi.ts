import axios from "axios";
import type {
	GrowingSeason,
	Vegetable,
	VegetableCategory,
} from "@/data/vegetables";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Match the column names that exist in Supabase (snake_case)
type SupabaseVegetable = {
	id: string;
	slug: string;
	name: string;
	category: VegetableCategory;
	seasons: GrowingSeason[];
	description: string;
	origin: string;
	nutritional_highlights: string[];
	image: string;
};

type FavoriteRecord = {
	id: string;
	vegetables: SupabaseVegetable | null;
};

type FavoriteSlugRecord = {
	vegetables: { slug: string } | null;
};

function createRestClient() {
	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error("Supabase URL or anon key is missing");
	}

	return axios.create({
		baseURL: `${supabaseUrl}/rest/v1`,
		headers: {
			apikey: supabaseAnonKey,
			Authorization: `Bearer ${supabaseAnonKey}`,
		},
	});
}

const restClient = createRestClient();

function mapVegetable(record: SupabaseVegetable): Vegetable {
	return {
		id: record.id,
		slug: record.slug,
		name: record.name,
		category: record.category,
		seasons: record.seasons,
		description: record.description,
		origin: record.origin,
		nutritionalHighlights: record.nutritional_highlights,
		image: record.image,
	};
}


export async function fetchVegetables(): Promise<Vegetable[]> {
	const { data } = await restClient.get<SupabaseVegetable[]>("/vegetables", {
		params: {
			select: "*",
		},
	});

	return data.map(mapVegetable);
}

export async function fetchFavoriteVegetables(
	userId: string,
): Promise<Vegetable[]> {
	const { data } = await restClient.get<FavoriteRecord[]>(
		"/user_favorite_vegetables",
		{
			params: {
				select: "vegetables(*)",
				user_id: `eq.${userId}`,
			},
		},
	);

	return (
		data
			?.map((record) => record.vegetables)
			.filter((vegetable): vegetable is SupabaseVegetable => Boolean(vegetable))
			.map(mapVegetable) ?? []
	);
}

export async function fetchFavoriteSlugs(userId: string): Promise<string[]> {
	const { data } = await restClient.get<FavoriteSlugRecord[]>(
		"/user_favorite_vegetables",
		{
			params: {
				select: "vegetables(slug)",
				user_id: `eq.${userId}`,
			},
		},
	);

	return (
		data
			?.map((record) => record.vegetables?.slug ?? null)
			.filter((slug): slug is string => Boolean(slug)) ?? []
	);
}

export async function addFavoriteVegetable(
	userId: string,
	vegetableId: string,
): Promise<void> {
	await restClient.post(
		"/user_favorite_vegetables",
		{
			user_id: userId,
			vegetable_id: vegetableId,
		},
		{
			headers: {
				Prefer: "return=minimal,resolution=merge-duplicates",
			},
		},
	);
}

export async function removeFavoriteVegetable(
	userId: string,
	vegetableId: string,
): Promise<void> {
	await restClient.delete("/user_favorite_vegetables", {
		params: {
			user_id: `eq.${userId}`,
			vegetable_id: `eq.${vegetableId}`,
		},
	});
}
