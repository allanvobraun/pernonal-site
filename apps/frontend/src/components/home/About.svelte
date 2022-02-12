<script lang="ts">
	import type { Tech } from '$lib/types';
	import Card from '$components/Card.svelte';
	import Heading from '$components/Heading.svelte';
	import { renderMd } from '$lib/helper';
	import TechStack from './TechStack.svelte';

	export let text: string;
	export let technologies: Tech[];

	const renderedMd = renderMd(text);
</script>

<section id="about" class="relative">
	<div class="flex flex-col justify-center items-center mx-auto px-8 sm:max-w-3xl 2xl:max-w-4xl">
		<Heading text="Sobre mim" />
		<div class="my-5">
			<div id="about-card">
				<Card>
					<div class="text-base markdown-body sm:text-lg">
						{@html renderedMd}
					</div>
				</Card>
			</div>
		</div>
		<h2
			class="font-sand font-semibold uppercase tracking-wider text-4xl 2xl:text-5xl text-white text-center my-6"
		>
			Tech Stack
		</h2>
		<div class="my-5 w-full">
			<TechStack {technologies} />
		</div>
	</div>
</section>
