<script>
	import '../app.css';
	import 'github-markdown-dracula-css/github-markdown-dracula.css';
	import '$lib/assets/styles/prism-hopscotch.css';
	import '$lib/assets/styles/custom.css';

	import NavBar from '$components/NavBar.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>Homepage Allan Braun</title>
	<meta name="description" content="Homepage do allan braun, desenvolvedor fullstack" />
</svelte:head>	

<header class="fixed top-0 z-50">
	<NavBar />
</header>
<main class="flex flex-col">
	<slot />
</main>
<Footer />
