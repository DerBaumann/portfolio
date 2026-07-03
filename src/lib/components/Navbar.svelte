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

<nav class="sticky top-0 justify-between py-4 px-8 grid grid-cols-3 bg-surface-900 shadow-xl">
	<a href={resolve('/')} class="btn preset-tonal inline w-fit">Der Baumann</a>
	<ul class="inline-flex justify-center gap-16">
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
