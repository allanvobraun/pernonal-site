<script>
	import Card from '$components/Card.svelte';
	import { renderMd } from '$lib/helper';

	export let text;
	const nada = text ?? '# nada';
	const renderedMd = renderMd(nada);
</script>

<h1 class="heading my-6">sobre mim</h1>
<div class="my-12 h-screen">
	<Card>
		<div class="markdown-body">
			{@html renderedMd}
		</div>
	</Card>
</div>