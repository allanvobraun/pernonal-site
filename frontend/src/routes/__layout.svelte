<script>
	import '../app.css';
	import 'github-markdown-dracula-css/github-markdown-dracula.css';
	import '$static/prism-hopscotch.css';
	import '$static/custom.css';

	import NavBar from '$components/NavBar.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<header class="fixed top-0 z-50">
	<NavBar />
</header>
<main class="flex flex-col">
	<slot />
</main>
<Footer></Footer>