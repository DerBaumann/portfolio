<script lang="ts">
	import { resolve } from '$app/paths';
	import type { page } from '$app/state';
	import type { RouteId } from '$app/types';
	import { Moon, Sun } from '@lucide/svelte';
	import { onMount } from 'svelte';

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

	// TODO: Cache prefered theme in localStorage

	let isDark = $state(false);

	onMount(() => {
		isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.classList.toggle('dark', isDark);
	});

	function switchTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
	}
</script>

<nav
	class="sticky top-0 justify-between py-4 px-8 grid grid-cols-3 bg-surface-100 dark:bg-surface-900 shadow-xl"
>
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
	<div class="flex justify-end">
		<button onclick={switchTheme} class="btn-icon preset-filled-secondary-500">
			{#if isDark}
				<Moon />
			{:else}
				<Sun />
			{/if}
		</button>
	</div>
</nav>
