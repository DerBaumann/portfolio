<script lang="ts">
	interface Props {
		title: string;
	}

	const { title }: Props = $props();

	const pageTitle = $derived(`${title} - DerBaumann`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
