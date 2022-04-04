<script>
	/**
	 * File name : Navigationbar.svelte
	 * Description : Contain navigation bar, where all questions are clickable
	 * Author : Pankaj Kumar
	 * Version : 1
	 * Package : svelte_items
	 * Created : 15 March 2022
	 * Updated by : Pankaj Kumar
	 * Updated Date : 30 March 2022
	 */

	import { fly } from 'svelte/transition';
	export let show = false;

	import { answerCheckedByUser, savedData } from '../store.js';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let clickedQuestion;
	function handleClick(x) {
		dispatch('clickedQuestionNo', x);
	}

	// show attempted or unattempted questions
	import { savedAnswers } from '../store.js';
</script>

{#if show}
	<nav id="navbar" transition:fly={{ x: -250, opacity: 1 }}>
		<h2>Attempted : {$answerCheckedByUser.length}</h2>
		<h2>Unattempted : {11 - $answerCheckedByUser.length}</h2>
		<h3>Questions..</h3>
		{#each $savedData as item, i}
			<p>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<!-- svelte-ignore a11y-accesskey -->
				<a href="#" on:click={() => handleClick((clickedQuestion = i))}
					><strong>Q{i + 1}. </strong>{JSON.parse(item.content_text).question}</a
				>
			</p>
		{/each}
	</nav>
{/if}

<style>
	h2 {
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
