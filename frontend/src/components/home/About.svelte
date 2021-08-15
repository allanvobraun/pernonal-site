
<script>
	import Card from '$components/Card.svelte';
	import { renderMd } from '$lib/helper';

	export let text;
	const nada = text ?? '# nada';
	const renderedMd = renderMd(nada);
</script>

<div class="my-24">
	<Card>
		<div class="markdown-body">
			{@html renderedMd}
		</div>
	</Card>
	
</div>
