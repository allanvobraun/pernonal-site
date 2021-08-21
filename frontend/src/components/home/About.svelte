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

<div id="about" class="flex flex-col">
	<Heading text="Sobre mim" />
	<div class="my-5 mx-5 sm:mx-auto">
		<div id="about-card" class="w-full sm:w-max">
			<Card>
				<div class="text-base markdown-body sm:text-lg">
					{@html renderedMd}
				</div>
			</Card>
		</div>
	</div>

	<Heading text="Tech Stack" />
	<div class="my-5 mx-5 sm:mx-auto">
		<TechStack {technologies} />
	</div>
</div>
