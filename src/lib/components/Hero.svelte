<script lang="ts">
	interface Props {
		background: string;
		title: string;
		subtitle?: string;
	}

	const { background, title, subtitle }: Props = $props();
</script>

<header style="background-image: url({background});" class="px-16 py-24 bg-cover bg-center">
	<h1 class="h1 mb-6 text-primary-500">{title}</h1>
	{#if subtitle}
		<p class="text-xl text-primary-100">{subtitle}</p>
	{/if}
</header>
