<script lang="ts">
	import Border from '$lib/components/Border.svelte';
	export let name: string;
	export let warningMessage: string;
	export let warning: string;
</script>

<section>
	<p>{warning}</p>
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

	section p:first-child {
		font-weight: bold;
	}
</style>
