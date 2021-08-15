<script>
	import { renderMd } from '$lib/helper';

	const obj = {
		'name': 'Allan',
		'type': 'Humanoid',
		'occupation': 'Full Stack Developer'
	};

	const jsonStr = JSON.stringify(obj, null, 2);
	
	const mdString = `\`\`\`json\n${jsonStr}\n \`\`\``;
	const renderedMd = renderMd(mdString);
</script>

<div class="bg-fixed started-bg flex items-center justify-center flex-col h-screen">
	<div class="-mt-16 mx-3 flex flex-col justify-center items-center space-y-2">
		<div class="bg-boneWhite border-4 rounded-full h-52 w-52 flex items-center justify-center overflow-hidden">
			<img src="https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s900-c-k-c0x00ffffff-no-rj" alt="Minha foto" />
		</div>
		<h1 class="tracking-tight text-center font-fira font-semibold">Hello word!</h1>
		<span class="front-code">{@html renderedMd}</span>
		<noscript>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</noscript>
	</div>
</div>

<style>
	:global(.front-code>pre) {
		@apply text-sm lg:text-base;
	}

	.started-bg {
		background-image: url(/gato1.png);
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		color: #fff;
		min-height: 700px;
		z-index: -1;
	}
</style>
