<script lang="ts">
	import SanduicheIcon from '$static/sanduiche.svg';
	import CloseIcon from '$static/x.svg';
	import { slide } from 'svelte/transition';

	interface MenuItem {
		name: string;
		ref: string;
	}

	//   const items = [];
	const items: MenuItem[] = [
		{
			name: 'Home',
			ref: '#home',
		},
		{
			name: 'Sobre mim',
			ref: '#about',
		},
		{
			name: 'Projetos',
			ref: '#',
		},
		{
			name: 'Blog',
			ref: '#',
		},
	];

	let mobileDropDown = false;
</script>

<nav class="absolute w-screen bg-grey1 sm:bg-gray-600 sm:bg-opacity-10">
	<div class="sm:mx-24">
		<div class="relative flex items-center justify-between h-16">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-boneWhite  "
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (mobileDropDown = !mobileDropDown)}
				>
					<span class="sr-only">Open main menu</span>
					<div class="block h-6 w-6">
						{#if mobileDropDown === true}
							<CloseIcon />
						{:else}
							<SanduicheIcon />
						{/if}
					</div>
				</button>
			</div>
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<a href="/" class="text-2xl font-black text-white tracking-wide ">Allan Braun</a>
				</div>
				<div class="hidden sm:block sm:ml-6 lg:flex lg:flex-row lg:flex-grow">
					<div class="flex space-x-4 lg:ml-auto">
						{#each items as { name, ref }}
							<a
								href={ref}
								class="text-purplishWhite hover:bg-grey1 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
							>
								{name}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if mobileDropDown === true}
		<div class="sm:hidden" id="mobile-menu" transition:slide>
			<div class="px-2 pt-2 pb-3 space-y-1">
				{#each items as { name, ref }}
					<a href={ref} class="text-purplishWhite block px-3 py-2 rounded-md text-base font-medium">
						{name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
