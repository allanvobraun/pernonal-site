<script lang="ts">
	import type { Tech } from '$lib/types';
	import env from '$lib/env';
	import { dynamicImage } from '$lib/helper';
	export let technologies: Tech[];
</script>

<div id="techstack">
	<div class="grid grid-cols-3 sm:grid-cols-5 gap-10">
		{#each technologies as tech}
			<div class="text-center text-white flex flex-col items-center">
				<div
					class="bg-boneWhite rounded-full overflow-hidden h-20 w-20 flex items-center justify-center p-3"
				>
					<img class="inline" src={dynamicImage(tech.icon.url)} alt={tech.name} />
				</div>
				<span class="font-sand">{tech.name}</span>
			</div>
		{/each}
	</div>
</div>
