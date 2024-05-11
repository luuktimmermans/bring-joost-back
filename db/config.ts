import { column, defineDb, defineTable } from "astro:db";

const Counter = defineTable({
	columns: {
		name: column.text(),
		likes: column.number(),
	},
});

export default defineDb({
	tables: { Counter },
});
