<script lang="ts">
	import { resolve } from '$app/paths';
	import heroBackground from '$lib/assets/darkroot-garden-2.jpg';
	import aboutImg from '$lib/assets/forest-path-green-md.jpg';
	import Hero from '$lib/components/Hero.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import { MoveRight, Star } from '@lucide/svelte';

	interface Project {
		name: string;
		description?: string;
		stars: number;
		link: string;
	}

	const featuresRepos = $state<Project[]>([
		{
			name: 'timelog-rs',
			description: 'A simple rust cli to track your working time. A rewrite of DerBaumann/timelog',
			stars: 0,
			link: 'https://github.com/DerBaumann/timelog-rs'
		},
		{
			name: 'ajour',
			description:
				'A better Todo / Task-Management app with an automatic daily todo-list. Written in both Sveltekit and Rust + Axum',
			stars: 0,
			link: 'https://github.com/DerBaumann/ajour'
		},
		{
			name: 'dotfiles',
			stars: 0,
			link: 'https://github.com/DerBaumann/dotfiles'
		},
		{
			name: 'portfolio',
			description:
				'My personal portfolio, that is used for job applications and maybe in the future to offer services to customers',
			stars: 0,
			link: 'https://github.com/DerBaumann/portfolio'
		}
	]);
</script>

<Hero
	background={heroBackground}
	title="Der Baumann"
	subtitle="Bastler und Freigeist mit einer besonderen Faszination für Technik und einem autistischen Perfektionismus"
/>

<main class="max-w-6xl mx-auto px-24 py-12">
	<section class="flex gap-16">
		<div class="space-y-8">
			<h2 class="h2">Über mich</h2>
			<p>
				Ich bin ein Softwareentwickler in Ausbildung im dritten Lehrjahr. Meine Hauptgebiete, in
				denen ich mich bewege, sind die Webentwicklung und die Entwicklung von kleinen CLI-Tools, um
				mir den Alltag einfacher zu machen. Ich bin ausserdem ein riesiger Linux-Nerd und kann mich
				daher auch gut auf Linux-Systemen navigieren.
			</p>
			<a href={resolve('/about')} class="btn preset-outlined-primary-500">Mehr <MoveRight /></a>
		</div>
		<div>
			<img src={aboutImg} alt="Bild von einem Weg in einem nebligen Wald" />
		</div>
	</section>

	<hr class="border-primary-500 border-2 my-16 rounded-full" />

	<section>
		<h2 class="h2 mb-8">Projekte</h2>
		<div class="flex gap-8 flex-wrap">
			{#each featuresRepos as repo (repo.link)}
				<div class="card bg-surface-200 dark:bg-surface-800 flex flex-col gap-8 p-4">
					<div class="flex justify-between flex-1 gap-8">
						<h3 class="h3">{repo.name}</h3>
						<p>{repo.stars} <Star class="inline" /></p>
					</div>
					<p class="flex-1 max-w-64">{repo.description}</p>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a href={repo.link} target="_blank" class="self-end btn preset-outlined-primary-500">
						Zum Repo <MoveRight class="inline" />
					</a>
				</div>
			{/each}
		</div>
	</section>

	<hr class="border-primary-500 border-2 my-16 rounded-full" />

	<section>
		<h2 class="h1 mb-8">Kenntnisse</h2>

		<Skills />
	</section>
</main>
