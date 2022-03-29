
<!-- 
	// File name : index.svelte
	// Description : Main page of project
	// Author : Pankaj Kumar
	// Version : 1
	// Package : svelte_items
	// Created : 15 March 2022
	// Updated by : 
	// Updated Date :  -->

<script>
	import Header from '../components/Header.svelte';
</script>

<Header />
<div id="startTest">
	<a href="/testPage">
		<!-- svelte-ignore a11y-accesskey -->
		<button accesskey="s"> Start Test </button>
	</a>
</div>

<style>
	#startTest {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 99vh;
		min-width: 130px;
	}
	button {
		padding: 10px;
		width: 130px;
		font-size: 20px;
		border: 2px solid black;
		border-radius: 5px;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>
