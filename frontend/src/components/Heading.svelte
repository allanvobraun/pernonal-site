<script lang="ts">
	export let text: string = '';
</script>

<h1 class="heading my-6">{text}</h1>

<style>
	.heading {
		@apply font-sand font-semibold uppercase tracking-wider text-5xl text-white text-center 
		after:content-center after:block after:my-3 after:mx-auto after:w-8 after:h-0.5 after:bg-boneWhite after:opacity-25;
	}
</style>
