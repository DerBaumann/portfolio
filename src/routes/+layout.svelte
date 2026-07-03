<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="sticky top-0 py-4 bg-surface-900 shadow-xl ">
	<ul class="flex justify-center gap-16">
		<li><a href={resolve("/")} class="btn preset-outlined-primary-500">Home</a></li>
		<li><a href={resolve("/about")} class="btn preset-outlined-secondary-500">Über mich</a></li>
		<li><a href={resolve("/projects")} class="btn preset-outlined-secondary-500">Projekte</a></li>
	</ul>
</nav>

{@render children()}
