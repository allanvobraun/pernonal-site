<script>
	import Heading from '$components/Heading.svelte';
</script>

<section id="projects" class="bg-orange my-24">
	<div id="divider">
		<div class="spacer layer-top" />
	</div>
	<div class="flex flex-col items-center -mt-5 sm:-mt-14">
		<div class="text-center mb-24 max-w-xl">
			<Heading text="Projetos" />
			<p class="text-xl leading-relaxed mb-4 font-glory mx-2">
				Projetos que eu faço no meu tempo livre, com o objetivo de aprender algo novo ou prototipar
				uma ideia.
			</p>
		</div>
		<h1>WIP: WORK IN PROGRESS</h1>
	</div>

	<div class="">
		<div class="spacer layer-botton" />
	</div>
</section>

<style>
	.spacer {
		aspect-ratio: 960/200;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layer-top {
		background-image: url('/spacer.svg');
	}

	.layer-botton {
		background-image: url('/wave-botton.svg');
	}
</style>
