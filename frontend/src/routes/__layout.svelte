<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
</script>

<header class="sticky top-0 z-50">
	<NavBar />
</header>
<main class="relative">
	<slot />
</main>
<style>
    main {
        height: 800px;
    }
</style>