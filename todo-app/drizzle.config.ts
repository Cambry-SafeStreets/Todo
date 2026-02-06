import 'dotenv/config'
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: "postgres://user:mysecretpassword@localhost:5432/tododb"

	}
})