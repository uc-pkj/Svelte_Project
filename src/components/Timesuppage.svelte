
	<!-- // File name : Timesuppage.svelte
	// Description : Call when times up
	// Author : Pankaj Kumar
	// Version : 1
	// Package : svelte_items
	// Created : 15 March 2022
	// Updated by : Pankaj Kumar
	// Updated Date : 30 March 2022  -->

<script>
	import { fade } from 'svelte/transition';

	function overlay_click(e) {
		if ('close' in e.target.dataset) show = false;
	}

	export let show = false;
</script>

{#if show}
	<div id="outerdiv">
		<div class="modal-overlay" on:click={overlay_click} transition:fade={{ duration: 150 }}>
			<div class="modal-container">
				<main>
					<h2>TIMES UP, Now click here to go to Result Page.</h2>
					<div>
						<a href="/ResultPage">
							<!-- svelte-ignore a11y-accesskey -->
							<button accesskey="r"> Result </button>
						</a>
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
	.modal-overlay {
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
	h2,
	div {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	button {
		margin-top: 30px;
		padding: 5px;
		font-size: 20px;
		width: 100px;
		border-radius: 6px;
	}
	.modal-container {
		position: relative;
		background-color: #ffffff;
		width: 50vw;
		height: 170px;
		border-radius: 10px;
		margin: 1rem auto 0.2rem;
		box-shadow: 0 3px 10px #555;
	}
	main {
		padding: 0.5rem;
	}
	#outerdiv {
		color: black;
	}
</style>
