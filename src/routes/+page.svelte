<script lang="ts">
	import WeatherHeader from '$lib/components/WeatherHeader.svelte';
	import WeatherWarning from '$lib/components/WeatherWarning.svelte';
	import WeatherStudents from '$lib/components/WeatherHobbies.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { name, degrees, description } = data.document;
</script>

<div>
	<WeatherHeader firstName={name} {degrees} {description} />
	<WeatherWarning
		warning="Excessive Heat warning"
		warningMessage="National Weather Service: Excessive Heat Warning in"
		{name}
	/>
	<WeatherStudents />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		border-radius: 0.3rem;
		max-width: 35rem;
		background: var(--gradient);
	}

	@media (min-width: 50rem) {
		div {
			height: 80%;
		}
	}
</style>
