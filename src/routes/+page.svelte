<script lang="ts">
	import { resolve } from '$app/paths';
	import heroBackground from '$lib/assets/darkroot-garden-2.jpg';
	import aboutImg from '$lib/assets/forest-path-green-md.jpg';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import { MoveRight } from '@lucide/svelte';
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
				Ich bin ein Softwareentwickler in Ausbildung im dritten Lehrjahr, mit dem Ziel irgendwann
				selbstständig zu werden. Meine Hauptgebiete, in denen ich mich bewege, sind die
				Webentwicklung und die Entwicklung von kleinen CLI-Tools, um mir den Alltag einfacher zu
				machen. Ich bin ausserdem ein riesiger Linux-Nerd und kann mich daher auch gut auf
				Linux-Systemen navigieren.
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
		<Projects />
	</section>

	<hr class="border-primary-500 border-2 my-16 rounded-full" />

	<section>
		<h2 class="h1 mb-8">Kenntnisse</h2>

		<Skills />
	</section>
</main>
