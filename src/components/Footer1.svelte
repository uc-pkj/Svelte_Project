<script>
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
    
	export let currentdata;
</script>

<footer>
	<div id="footerdiv">
		<div>
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
			<a href="/"><button class="list_previous btn">Dashboard</button></a>
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
