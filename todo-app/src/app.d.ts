// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

// used this as reference https://github.com/sveltejs/svelte/discussions/14240
interface PageMetaData {
	title: string;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			meta: PageMetaData
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
