<script>
	
	
	// import components
	import Header from './Header.svelte';
	// @ts-ignore
	import Footer from './Footer.svelte';
	
	// fetching data from JSON file
	import { saveddata } from '../Store/store.js';
	import { onMount } from 'svelte';
	const apiURL = '/static/data/question.json';
	let data = [];
	onMount(async function () {
		const response = await fetch(apiURL);
		data = await response.json();
		saveddata.set(data);
	});
	
	// change question 
	let currentques = 0;
	// increase current question
	function incurrentques() {
		currentques += 1;
	}
	// decrease current question
	function decurrentques() {
		currentques -= 1;
	}
	
	// onclick change questions 
	const changques = (event) => {
		currentques = event.detail;
	};

	
	// store answers in a array in store file 
	import {savedanswers} from '../Store/store'

	let selected=[];
	$: savedanswers.update((items) =>{
		return [...selected]
	})
	// console.log(savedanswers);


	// store userclick data 
	import {quesanswerdata} from '../Store/store.js'
	// import {onMount} from 'svelte' // already declared
	let storedata=[];
	onMount(async () => {
		const res = await fetch(`/data/question.json`);
		storedata = await res.json();
		quesanswerdata.set(storedata);
	});

</script>

<Header />

<div id="alldata">
	{#each storedata as item, i}
		{#if currentques == i}
			<div>
				<h2>Q{i + 1}.{JSON.parse(item.content_text).question}</h2>
				<br />
				{#each JSON.parse(item.content_text).answers as ans, Index}
					<div id="answer">
						<!-- declare answer id in style  -->
						<input type="radio" id={ans.id} value={ans.answer} name="answer" bind:group={selected[i]}/>
						<label for="{ans.id}">{@html ans.answer}</label>
					</div>
				{/each}
			</div>
		{/if}
	{/each}
</div>

<Footer
	on:increment={incurrentques}
	on:decrement={decurrentques}
	count={currentques + 1}
	on:changques={changques}
	currentdata={currentques}
/>

<style>
	#alldata {
		margin: 100px 200px 0px 310px;
	}
</style>
