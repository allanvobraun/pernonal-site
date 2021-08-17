<script>
	import Card from '$components/Card.svelte';
	import { renderMd } from '$lib/helper';

	export let text;
	const renderedMd = renderMd(text);
</script>

<div class="my-12 mx-5 h-screen">
	<Card>
		<div class="markdown-body">
			{@html renderedMd}
		</div>
	</Card>
</div>