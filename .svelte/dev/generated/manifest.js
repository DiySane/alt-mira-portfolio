import * as layout from "../components/layout.svelte";

const components = [
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/+layout.svelte"),
	() => import("../../../src/routes/+page.svelte")
];

const d = decodeURIComponent;
const empty = () => ({});

export const routes = [
	// src/routes/index.svelte
[/^\/$/, [components[0]]],

// src/routes/+layout.svelte
[/^\/\+layout\/?$/, [components[1]]],

// src/routes/+page.svelte
[/^\/\+page\/?$/, [components[2]]]
];

export { layout };