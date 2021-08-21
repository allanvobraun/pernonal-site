<script lang="ts">
	import type { Tech } from '$lib/types';
	import env from '$lib/env';
	export let technologies: Tech[];
</script>

<div id="techstack" class="my-12 mx-5">
	<div class="grid grid-cols-3 w-full sm:grid-cols-5 sm:w-max gap-10  m-auto">
		{#each technologies as tech}
			<div class="text-center text-white flex flex-col items-center">
				<div
					class="bg-boneWhite rounded-full overflow-hidden h-20 w-20 flex items-center justify-center p-3"
				>
					<img class="inline" src={env.assetsUrl + tech.icon.url} alt={tech.name} />
				</div>
				<span class="font-sand">{tech.name}</span>
			</div>
		{/each}
	</div>
</div>
