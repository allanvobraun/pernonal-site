<script>
	import Card from '$components/Card.svelte';
	import Heading from '$components/Heading.svelte';
	import { renderMd } from '$lib/helper';

	export let text;
	const renderedMd = renderMd(text);
</script>

<div id="about" class="flex flex-col">
	<Heading text="Sobre mim" />
	<div class="my-12 mx-5">
		<Card>
			<div class="markdown-body">
				{@html renderedMd}
			</div>
		</Card>
	</div>

	<Heading text="Tech Stack" />
</div>
