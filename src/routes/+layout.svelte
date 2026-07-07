<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar
	currentPath={page.url.pathname}
	routes={[
		{ path: '/', title: 'Home' },
		{ path: '/about', title: 'Über mich' },
		{ path: '/projects', title: 'Projekte' }
	]}
/>

{@render children()}

<footer class="flex justify-center w-screen gap-64 bg-surface-100 dark:bg-surface-900 py-8">
	<ul>
		<li><a href={resolve('/')}>Home</a></li>
		<li><a href={resolve('/about')}>Über mich</a></li>
		<li><a href={resolve('/projects')}>Projekte</a></li>
	</ul>
	<!-- TODO: Icons for socials -->
	<ul>
		<li><a href="https://github.com/DerBaumann">https://github.com/DerBaumann</a></li>
	</ul>
</footer>
