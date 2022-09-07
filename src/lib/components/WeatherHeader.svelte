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
		animation: shake 10s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
		opacity: 0.8;
	}

	span {
		position: relative;
		font-size: 5rem;
		font-weight: lighter;
	}

	p {
		position: relative;
		z-index: 1;
		margin: 0;
		padding: 0;
		font-size: 2rem;
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-2px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(4px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-6px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(6px, 0, 0);
		}
	}
</style>
