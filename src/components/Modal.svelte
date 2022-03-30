	<!-- // File name : Model.svelte
	// Description : Contain popup when you click end test button
	// Author : Pankaj Kumar
	// Version : 1
	// Package : svelte_items
	// Created : 15 March 2022
	// Updated by : Pankaj Kumar
	// Updated Date : 30 March 2022 -->

<script>
	import { fade } from 'svelte/transition';

	function overlay_Click(e) {
		if ('close' in e.target.dataset) show = false;
	}

	export let show = false;
	import ResultPage from '../routes/ResultPage.svelte';
</script>

{#if show}
	<div>
		<div class="modal_Overlay" on:click={overlay_Click} transition:fade={{ duration: 150 }}>
			<div class="modal-container">
				<main>
					<h1>Are you want to end your test ?</h1>
					<div>
						<a href="/ResultPage">
							<!-- svelte-ignore a11y-accesskey -->
							<button accesskey="y"> YES </button>
						</a>
						<!-- svelte-ignore a11y-accesskey -->
						<button on:click={() => (show = false)} accesskey="n"> NO </button>
					</div>
				</main>
			</div>
		</div>
	</div>
{/if}

<style>
	a {
		text-decoration: none;
		color: black;
		cursor: default;
	}
	.modal_Overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	h1,
	div {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	h1 {
		color: black;
		text-transform: capitalize;
	}
	button {
		margin: 15px;
		padding: 10px;
		width: 100px;
		font-size: 20px;
		border-radius: 5px;
	}
	.modal-container {
		position: relative;
		background-color: #ffffff;
		width: 36vw;
		border-radius: 10px;
		height: 150px;
		margin: 1rem auto 0.2rem;
		box-shadow: 0 3px 10px #555;
	}
	main {
		padding: 0.5rem;
	}
</style>
