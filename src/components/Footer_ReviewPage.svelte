<script>
	/*	File name : Footer_ReviewPage.svelte
	Description : Contain result page footer (different from test page footer)
	Author : Pankaj Kumar
	Version : 1
	Package : svelte_items
	Created : 15 March 2022
	Updated by : Pankaj Kumar
	Updated Date : 30 March 2022 */

	// import event dispatcher
	import { createEventDispatcher } from 'svelte';
	// assign dispatcher to constant
	const dispatch = createEventDispatcher();
	// for next question
	const increaseQuestionValue = () => {
		dispatch('increment');
	};
	// for previous question
	const decreaseQuestionValue = () => {
		dispatch('decrement');
	};
	export let count;

	export let currentData;
</script>

<footer>
	<div id="FooterDiv">
		<div>
			<!-- svelte-ignore a11y-accesskey -->
			<button
				class="List_Previous btn"
				on:click={decreaseQuestionValue}
				disabled={currentData + 1 <= 1}
				accesskey="p">Previous</button
			>
		</div>
		<div>
			<span>{count} of 11</span>
		</div>
		<div>
			<!-- svelte-ignore a11y-accesskey -->
			<button
				class="List_Previous btn"
				on:click={increaseQuestionValue}
				disabled={currentData + 1 >= 11}
				accesskey="n">Next</button
			>

			<!-- svelte-ignore a11y-accesskey -->
			<a href="/"><button class="List_Previous btn">Home</button></a>
		</div>
	</div>
</footer>

<style>
	#FooterDiv {
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
