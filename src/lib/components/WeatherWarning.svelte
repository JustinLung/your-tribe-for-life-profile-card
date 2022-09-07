<script lang="ts">
	import Border from '$lib/components/Border.svelte';
	export let name: string;
	export let warningMessage: string;
	export let warning: string;
</script>

<section>
	<h2>{warning}</h2>
	<p>{warningMessage} {name}.</p>
	<Border />
</section>

<style>
	section {
		border-radius: 0.3rem;
		background-color: var(--color-light-blue);
		margin: 0 1rem;
		padding: 1rem;
	}

	h2 {
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
