<script lang="ts">
	import '../styles/style.css';
	import '../styles/theme.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
