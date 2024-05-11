import type { APIRoute } from "astro";
import { promises as fs } from "fs";

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json();
	const filePath = new URL("https://bring-joost-back-m6n0doal7-eltiszls-projects.vercel.app/data/counter.json");

	// Read current JSON file
	const fileContents = await fs.readFile(filePath, "utf-8");
	const jsonContent = JSON.parse(fileContents);

	// Update the value; intentionally simplistic
	jsonContent.count = data.newCount;

	// Write updated JSON back to the file
	await fs.writeFile(filePath, JSON.stringify(jsonContent, null, 2), "utf-8");

	return new Response(
		JSON.stringify({
			count: data.newCount,
		}),
		{ status: 200 }
	);
};
