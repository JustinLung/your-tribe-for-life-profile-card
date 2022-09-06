<script>
	import WeatherHeader from '$lib/components/WeatherHeader.svelte';
	import WeatherWarning from '$lib/components/WeatherWarning.svelte';
	import WeatherStudents from '$lib/components/WeatherStudents.svelte';

	export let data;
</script>

<div>
	<WeatherHeader firstName={data.document.data.name} degrees={data.document.data.degrees} description={data.document.data.description} />
	<WeatherWarning name={data.document.data.name} />
	<WeatherStudents />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		border-radius: 0.3rem;
		max-width: 35rem;
		background-color: var(--color-dark-blue);
	}

	@media (min-width: 50rem) {
		div {
			height: 80%;
		}
	}
</style>
