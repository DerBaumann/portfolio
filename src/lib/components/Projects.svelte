<script lang="ts">
	import { MoveRight, Star } from '@lucide/svelte';

	interface Project {
		name: string;
		description?: string;
		stars: number;
		link: string;
	}

	const featuresRepos: Project[] = [
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
	];
</script>

<!-- TODO: Grid anstatt Flex -->
<div class="flex gap-8 flex-wrap">
	{#each featuresRepos as repo (repo.link)}
		<div class="card min-w-64 basis-0 bg-surface-200 dark:bg-surface-800 flex flex-col gap-8 p-4">
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
