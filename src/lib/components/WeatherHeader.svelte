<script lang="ts">
	export let firstName: string;
	export let degrees: number;
	export let description: string;
</script>

<section>
	<img src="/assets/images/cloud.png" alt="cloud" />
	<h1>{firstName}</h1>
	<span>{degrees}°</span>
	<p>{description}</p>
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3rem 0;
	}

	h1 {
		position: relative;
		padding: 0;
		margin: 0;
		font-size: 2rem;
	}

	img {
		position: absolute;
		opacity: 0.7;
		width: 100%;
		z-index: 0;
	}

	span {
		position: relative;
		font-size: 5rem;
		font-weight: lighter;
	}

	p {
		margin: 0;
		padding: 0;
		font-size: 2rem;
	}

</style>
