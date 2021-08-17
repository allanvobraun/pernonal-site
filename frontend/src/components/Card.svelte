<script lang="ts">
	export let title: string = null;
</script>

<div class="card bg-grey1 p-1 rounded-lg max-w-xl md:w-3/4 mx-auto">
	{#if title}
		<h2 class="text-2xl font-bold mb-2 mt-3 ml-5 text-boneWhite">{title}</h2>
	{/if}
	<div
		class="flex flex-row space-y-2 items-center justify-center h-full py-4 bg-darkGrey space-x-10 px-4"
	>
		<slot />
	</div>
</div>

<style>
	.card {
		box-shadow: 10px 8px 30px #1c1b1a;
	}
</style>
