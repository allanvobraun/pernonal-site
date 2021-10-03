<script context="module" lang="ts">
	export const prerender = true;
	export const router = false;
	export const hydrate = false;


	import type { Tech } from '$lib/types';

	export async function load({ fetch }) {
		const [aboutResponse, techResponse] = await Promise.all([
			fetch('/api/about'),
			fetch('/api/technologies'),
		]);

		const about = await aboutResponse.json();
		const technologies: Tech[] = await techResponse.json();
		return { props: { aboutText: about.text, technologies: technologies } };
	}
</script>

<script lang="ts">
	import BackGround from '$components/home/BackGround.svelte';
	import About from '$components/home/About.svelte';
	import Projects from '$components/home/Projects.svelte';

	export let aboutText: string;
	export let technologies: Tech[];
</script>

<span id="home" />
<BackGround />
<About bind:text={aboutText} bind:technologies />
<Projects />
