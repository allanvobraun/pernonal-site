<script>
	import Card from '$components/Card.svelte';

	import { renderMd } from '$lib/helper';
	const txt = "# potato!";
	const renderedMd = renderMd(txt);
</script>

<Card>
    <div class="markdown-body">
        {@html renderedMd}
    </div>
</Card>
