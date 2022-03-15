<script>
	import Header from './Header.svelte';

	import { saveddata } from '../Store/store.js';
	import { onMount } from 'svelte';

	// to print all questions
	let data = [];
	const apiURL = '/static/data/question.json';
	onMount(async function () {
		const response = await fetch(apiURL);
		data = await response.json();
	});

	// to make answer only clickable not skipable (when i jump to any question)
	import { savedanswers } from '../Store/store.js';
	$: data2 = $savedanswers.filter(Boolean);

	// let ansdata = [];
	// for (let i = 0; i < $saveddata.length; i++) {
	// 	let x = 0;
	// 	for (let j = 0; j < 4; j++) {
	// 		if (JSON.parse($saveddata[i].content_text).answers[j].is_correct == 1) {
	// 			x = j;
	// 		}
	// 	}
	// 	ansdata[i] = x;
	// 	// console.log('actual correct', ansdata);
	// }

	// Compare both userselected option and corrected Option
	// savedanswers
	// ansdata
	// let countcorrect=0;
	// $: for(let i=0;i<11;i++)
	// {
	// 	for(let j=0;j<11;j++)
	// 	{
	// 		if($savedanswers[i]==ansdata[j])
	// 		{
	// 			countcorrect+=1;
	// 		}
	// 	}
	// }
</script>

<Header />
<main>
	<!-- top 6 boxes  -->
	<div id="outerdiv">
		<div id="upperboxes">
			<div class="boxes">
				<p>Total Ques</p>
				<h2>11</h2>
			</div>
			<div class="boxes">
				<p>Attempted</p>
				<h2>{data2.length}</h2>
			</div>
			<div class="boxes">
				<p>Unattempted</p>
				<h2>{11 - data2.length}</h2>
			</div>
			<div class="boxes">
				<p>Correct</p>
				<h2>0</h2>
			</div>
			<div class="boxes">
				<p>Incorrect</p>
				<h2>0</h2>
			</div>
			<div class="boxes">
				<p>Percentage</p>
				<h2>0%</h2>
			</div>
		</div>
	</div>

	<!-- for questions  -->
	<div class="showques">
		<!-- <div> -->
			<h2 id="topques">Questions..</h2>
			{#each data as item, i}
				<div id="align">
					<div>
						<p class="bold"><a href="#">Q{i + 1}.{JSON.parse(item.content_text).question}</a></p>
					</div>
					<div id="answersshow">
						<p class="border">A</p>
						<p class="border">B</p>
						<p class="border">C</p>
						<p class="border">D</p>
					</div>
				</div>
			{/each}
		</div>
	<!-- </div> -->
</main>

<!-- <h1>Total correct {countcorrect}</h1> -->


<style>
	#align{
		display: flex;
		flex-direction: row;
	}
	#answersshow {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	hr {
		border: 2px solid rgb(114, 110, 110);
		border-radius: 15px;
	}
	.border {
		border: 1px solid black;
		border-radius: 5px;
		padding: 2px;
		width: 25px;
		text-align: center;
	}
	.bold {
		font-weight: bold;
	}
	.showques {
		margin: 50px 50px;
		width: 1000px;
		border: 2px solid black;
		border-radius: 9px;
		padding: 5px;
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
		width: 730px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	#topques {
		margin-bottom: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: underline;
	}
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#outerdiv {
		margin-top: 100px;
		display: flex;
		justify-content: center;
	}
	#upperboxes {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border: 5px solid rgb(114, 110, 110);
		border-radius: 10px;
		margin: 5px;
		padding: 5px;
		width: 1000px;
	}
	.boxes {
		border: 2px solid pink;
		border-radius: 10px;
		width: 200px;
		height: 100px;
		text-align: center;
		text-transform: uppercase;
		padding: 5px;
		margin: 8px;
		display: flex;
		justify-content: center;
		font-weight: bold;
		align-items: center;
		flex-direction: column;
	}
	h2 {
		padding-top: 10px;
	}
</style>
