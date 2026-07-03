<script lang="ts">
	import { resolve } from '$app/paths';
	import type { page } from '$app/state';
	import type { RouteId } from '$app/types';

	type Path = typeof page.url.pathname;

	interface Route {
		path: RouteId;
		title: string;
	}

	interface Props {
		routes: Route[];
		currentPath: Path;
	}

	const { routes, currentPath }: Props = $props();
</script>

<nav class="sticky top-0 py-4 bg-surface-900 shadow-xl">
	<ul class="flex justify-center gap-16">
		{#each routes as route (route.path)}
			<li>
				<a
					href={resolve(route.path)}
					class="btn {currentPath === route.path
						? 'preset-filled-primary-500'
						: 'preset-outlined-primary-500'}">{route.title}</a
				>
			</li>
		{/each}
	</ul>
</nav>
