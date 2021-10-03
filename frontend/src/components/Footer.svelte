<script lang="ts">
	import type { Link, LinkWithIcon } from '$lib/types';
	import { icons } from 'feather-icons';

	const links: Link[] = [{ name: 'Home', ref: '#home' }];

	const getIcon = (iconName: string) => icons[iconName].toSvg({ color: 'white' });

	const socialLink: LinkWithIcon[] = [
		{
			name: 'github',
			ref: 'https://github.com/allanvobraun',
			icon: getIcon('github'),
			color: '#211F1F',
		},
		{
			name: 'linkedin',
			ref: 'https://linkedin.com/in/allanvobraun',
			icon: getIcon('linkedin'),
			color: '#0976B4',
		},
		{
			name: 'email',
			ref: 'mailto:allanvobraun@gmail.com',
			icon: getIcon('mail'),
			color: '#EA4335',
		},
	];
</script>

<footer class="w-full inline-block">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-boneWhite m-7 text-center sm:text-left">
		<div id="links" class="flex flex-col items-center">
			<div>
				<h2 class="font-sand font-semibold">Links</h2>
				{#each links as link}
					<a href={link.ref} class="opacity-75 hover:opacity-100"> {link.name}</a>
				{/each}
			</div>
		</div>
		<div class="flex flex-col items-center">
			<a
				href="https://www.digitalocean.com/?refcode=29309b4d8996&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
			>
				<img
					src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
					alt="DigitalOcean Referral Badge"
					target="_blank"
					rel="noopener noreferrer"
				/>
			</a>
		</div>
	</div>
	<div
		id="social"
		class="flex flex-row justify-around max-w-1/2 sm:max-w-1/4 place-items-center mx-auto my-5"
	>
		{#each socialLink as link}
			<a
				class="rounded-full h-12 w-12 flex items-center justify-center"
				style="background-color: {link.color}"
				href={link.ref}
				title={link.name}
				target="_blank"
				rel="noopener noreferrer"
			>
				{@html link.icon}
			</a>
		{/each}
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid #e3e3e3;
		background-repeat: repeat-x;
		background-image: url('/endless-constellation.svg');
	}
</style>
