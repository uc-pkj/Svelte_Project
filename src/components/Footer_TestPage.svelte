<script>

	// File name : Footer_TestPage.svelte
	// Description : Contain test page footer
	// Author : Pankaj Kumar
	// Version : 1
	// Package : svelte_items
	// Created : 15 March 2022
	// Updated by : 
	// Updated Date : 

	// importing components
	import Navigationbar from './Navigationbar.svelte';
	import Timer from './Timer.svelte';
	// by default hidden sidebar
	let sidebar_Show = false;
	// import event dispatcher
	import { createEventDispatcher } from 'svelte';
	// assign dispatcher to constant
	const dispatch = createEventDispatcher();
	// for next question
	const increasequesvalue = () => {
		dispatch('increment');
	};
	// for previous question
	const decreasequesvalue = () => {
		dispatch('decrement');
	};
	export let count;
	// @ts-ignore
	import { clickOutside } from '../function/clickOutside.js';
	function handleClickOutside(event) {
		sidebar_Show = false;
	}
	// transfer data from navigation bar to test page
	const clickedquesno = (event) => {
		dispatch('changques', event.detail);
	};
	export let currentData;

	//import model file (on click on end test dialogue box will appear)
	import Modal from './Modal.svelte';
	let modal_Show = false;
	export let disabled = false;
</script>

<footer>
	<div id="footerdiv">
		<div>
			{#if disabled == false}
				<Timer />
			{:else}{/if}
		</div>

		<div use:clickOutside on:click-outside={handleClickOutside}>
			<!-- svelte-ignore a11y-accesskey -->
			<button
				class="List_Previous btn"
				on:click={() => (sidebar_Show = !sidebar_Show)}
				accesskey="l"
				{disabled}>List</button
			>
			<Navigationbar on:clickedquesno={clickedquesno} bind:show={sidebar_Show} />
				<!-- svelte-ignore a11y-accesskey -->
				<button class="List_Previous btn" on:click={decreasequesvalue} disabled={currentData+1<=1} accesskey="p">Previous</button>
		</div>
		<div>
			<span>{count} of 11</span>
		</div>
		<div>
				<!-- svelte-ignore a11y-accesskey -->
				<button class="List_Previous btn" on:click={increasequesvalue} disabled={currentData + 1 >= 11} accesskey="n">Next</button>
			
			<!-- svelte-ignore a11y-accesskey -->
			<button
				class="List_Previous btn"
				on:click={() => {
					modal_Show = true;
				}}
				accesskey="e"
				{disabled}>End Test</button
			>
			<Modal bind:show={modal_Show} />
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
	.List_Previous {
		margin: 0;
	}
	.btn {
		border-radius: 5px;
		width: 90px;
		padding: 8px;
		font-size: 15px;
	}
</style>
