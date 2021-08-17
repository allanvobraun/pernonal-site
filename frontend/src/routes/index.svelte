<script context="module">

	export async function load({ fetch }) {

		const res = await fetch('/api/about');
		const data = await res.json();

		return { props: { text: data.text } };
	}

</script>

<script>
	import BackGround from '$components/home/BackGround.svelte';
	import About from '$components/home/About.svelte';

	export let text;
</script>

<span id="home" />
<BackGround />
<About bind:text />
