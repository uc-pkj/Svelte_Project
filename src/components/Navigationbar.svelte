<!-- 
	// File name : Navigationbar.svelte
	// Description : Contain navigation bar, where all questions are clickable
	// Author : Pankaj Kumar
	// Version : 1
	// Package : svelte_items
	// Created : 15 March 2022
	// Updated by : 
	// Updated Date :  -->
<script>
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';

	import { fly } from 'svelte/transition';
	export let show = false;

	import {savedData } from '../store.js';
	import TestPage from '../routes/testPage.svelte';
	// let data = [];
	// onMount(() => {
	// 	savedData.subscribe((value) => {
	// 		data = value;
	// 	});
	// });

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let clickedques;
	function handleClick(x) {
		dispatch('clickedquesno', x);
	}

	// show attempted or unattempted questions
	import {savedanswers} from '../store.js'
	$: data1= $savedanswers.filter(Boolean);
	
</script>

{#if show}
	<nav id="navbar" transition:fly={{ x: -250, opacity: 1 }}>
		<h2>Attempted : {data1.length}</h2>
		<h2>Unattempted : {11-data1.length}</h2>
		<h3>Questions..</h3>
		{#each $savedData as item, i}
			<p class="elep">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<!-- svelte-ignore a11y-accesskey -->
				<a href="#" on:click={() => handleClick((clickedques = i))}><strong>Q{i + 1}. </strong>{JSON.parse(item.content_text).question}</a
				>
			</p>
		{/each}
	</nav>
{/if}

<style>
	h2{
		color: black;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		padding: 20px 15px 9.6px;
		border-right: 1px solid #aaa;
		background: #fff;
		overflow-x: auto;
		width: 280px;
	}
	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		color: rgb(255, 0, 0);
		text-decoration: underline;
	}
	a {
		display: block;
		font-size: 18px;
		margin: 5px;
		white-space: nowrap;
		width: 250px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	h3 {
		text-decoration: underline;
		margin-top: 10px;
		color: black;
		margin-bottom: 15px;
	}
</style>
