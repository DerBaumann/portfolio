<script lang="ts">
	import { resolve } from '$app/paths';
	import heroBackground from '$lib/assets/gray-foggy-forest-md.jpg';
	import aboutImg from '$lib/assets/forest-path-green-md.jpg';
	import Hero from '$lib/components/Hero.svelte';
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
				Ich bin ein Softwareentwickler in Ausbildung im dritten Lehrjahr. Meine Hauptgebiete in
				denen ich mich bewege sind die Webentwicklung und die Entwicklung von kleinen CLI-Tools, um
				mir den Alltag einfacher zu machen. Ich bin ausserdem ein riesiger Linux-Nerd und kann mich
				daher auch gut auf Linux-Systemen navigieren.
			</p>
			<a href={resolve('/about')} class="btn preset-outlined-primary-500">Mehr</a>
		</div>
		<div>
			<img src={aboutImg} alt="Bild von einem Weg in einem nebligen Wald" />
		</div>
	</section>
</main>
