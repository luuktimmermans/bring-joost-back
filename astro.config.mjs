import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import htmx from "astro-htmx";
import { defineConfig } from "astro/config";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
	output: "server",
	integrations: [tailwind(), db(), htmx()],
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
});
