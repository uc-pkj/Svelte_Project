<script>
	// importing components
	import Navigationbar from './Navigationbar.svelte';
	import Timer from './Timer.svelte';
	// by default hidden sidebar
	let sidebar_show = false;
	// import event dispatcher
	import { createEventDispatcher } from 'svelte';
	// assign dispatcher to constant
	const dispatch = createEventDispatcher();
	// for previous question
	const increasequesvalue = () => {
		dispatch('increment');
	};
	// for next question
	const decreasequesvalue = () => {
		dispatch('decrement');
	};
	export let count;
	// @ts-ignore
	import { clickOutside } from '../function/clickOutside.js';
	function handleClickOutside(event) {
		sidebar_show = false;
	}
	// transfer data from navigation bar to test page
	const clickedquesno = (event) => {
		dispatch('changques', event.detail);
	};
	export let currentdata;

	//import model file (on click on end test dialogue box will appear)
	import Modal from './Modal.svelte';
	let modal_show = false;
</script>

<footer>
	<div id="footerdiv">
		<div>
			<Timer />
		</div>

		<div use:clickOutside on:click-outside={handleClickOutside}>
			<!-- svelte-ignore a11y-accesskey -->
			<button
				class="list_previous btn"
				on:click={() => (sidebar_show = !sidebar_show)}
				accesskey="l">List</button
			>
			<Navigationbar on:clickedquesno={clickedquesno} bind:show={sidebar_show} />
			{#if currentdata + 1 <= 1}
				<!-- svelte-ignore a11y-accesskey -->
				<button class="list_previous btn" on:click={decreasequesvalue} disabled accesskey="p"
					>Previous</button
				>
			{:else}
				<!-- svelte-ignore a11y-accesskey -->
				<button class="list_previous btn" on:click={decreasequesvalue} accesskey="p"
					>Previous</button
				>
			{/if}
		</div>
		<div>
			<span>{count} of 11</span>
		</div>
		<div>
			{#if currentdata + 1 >= 11}
				<!-- svelte-ignore a11y-accesskey -->
				<button class="list_previous btn" on:click={increasequesvalue} disabled accesskey="n"
					>Next</button
				>
			{:else}
				<!-- svelte-ignore a11y-accesskey -->
				<button class="list_previous btn" id="idnext" on:click={increasequesvalue} accesskey="n"
					>Next</button
				>
			{/if}
			<!-- svelte-ignore a11y-accesskey -->
			<button
				class="list_previous btn"
				on:click={() => {
					modal_show = true;
				}}
				accesskey="e">End Test</button
			>
			<Modal bind:show={modal_show} />
		</div>
	</div>
</footer>

<style>
	#footerdiv {
		width: 630px;
		height: 60px;
		border-radius: 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: rgb(0, 0, 0);
		color: white;
		padding: 5px;
		position: fixed;
		bottom: 10px;
		right: 10px;
	}
	.list_previous {
		margin: 0;
	}
	.btn {
		border-radius: 5px;
		width: 90px;
		padding: 8px;
		font-size: 15px;
	}
</style>
