<script lang="ts">
	import { Coffee } from '@lucide/svelte';

	type Proficiency = 0 | 1 | 2 | 3 | 4 | 5;

	type Skill = {
		name: string;
		proficiency: Proficiency;
	};

	type Categories = Record<string, Skill[]>;

	const categories = $state<Categories>({
		Backend: [
			{
				name: 'Go',
				proficiency: 4
			},
			{
				name: 'Typescript',
				proficiency: 4
			},
			{
				name: 'SQL',
				proficiency: 3
			},
			{
				name: 'Rust',
				proficiency: 1
			}
		],
		'Devops / Infra': [
			{
				name: 'Linux',
				proficiency: 4
			},
			{
				name: 'Go',
				proficiency: 4
			},
			{
				name: 'Docker',
				proficiency: 3
			},
			{
				name: 'Rust',
				proficiency: 2
			}
		],
		Frontend: [
			{
				name: 'SvelteKit',
				proficiency: 3
			},
			{
				name: 'Tailwind',
				proficiency: 3
			},
			{
				name: 'Vue',
				proficiency: 2
			}
		],
		'Mobile & Desktop': [
			{
				name: 'Flutter',
				proficiency: 2
			}
		]
	});
</script>

<div class="flex gap-16">
	{#each Object.entries(categories) as [name, skills] (name)}
		<div>
			<h3 class="h3 mb-6 w-max">{name}</h3>
			<ul class="space-y-4">
				{#each skills as skill (skill.name)}
					<li class="w-max">
						{skill.name}:
						<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
						{#each Array(5) as _, i (i)}
							{#if i <= skill.proficiency}
								<Coffee class="text-primary-500 size-4 inline-block" />
							{:else}
								<Coffee class="inline-block size-4" />
							{/if}
						{/each}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
