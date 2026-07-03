<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';

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
