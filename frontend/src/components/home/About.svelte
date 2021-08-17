<script>
	import Card from '$components/Card.svelte';
	import Heading from '$components/Heading.svelte';
	import { renderMd } from '$lib/helper';

	export let text;
	const renderedMd = renderMd(text);
</script>

<Heading text="Sobre mim" />
<div class="my-12 mx-5 h-screen">
	<Card>
		<div class="markdown-body">
			{@html renderedMd}
		</div>
	</Card>
</div>
