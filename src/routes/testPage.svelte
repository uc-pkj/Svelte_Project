<script>
	/**
	 * File name : testPage.svelte
	 * Description : Contain all question of test
	 * Author : Pankaj Kumar
	 * Version : 1
	 * Package : svelte_items
	 * Created : 15 March 2022
	 * Updated by : Pankaj Kumar
	 * Updated Date : 30 March 2022
	 */

	// store answers in a array in store file
	import { savedAnswers } from '../store.js';
	let selected = [];
	// import components
	import Header from '../components/Header.svelte';
	// @ts-ignore
	import Footer_TestPage from '../components/Footer_TestPage.svelte';

	// fetching data from JSON file and set data in store file
	import { savedData } from '../store.js';
	import { onMount } from 'svelte';
	const apiURL = '/data/question.json';
	let data = [];
	onMount(async function () {
		$savedAnswers = selected;
		const response = await fetch(apiURL);
		data = await response.json();
		savedData.set(data);
	});

	// change question
	let currentQuestion = 0;
	// next question
	function inCurrentQuestion() {
		currentQuestion += 1;
	}
	// previous question
	function deCurrentQuestion() {
		currentQuestion -= 1;
	}
	// onclick change questions
	const changeQuestion = (event) => {
		currentQuestion = event.detail;
	};

	// this function is run when user click on radio button
	import { answerCheckedByUser, attemptQuestion } from '../store.js';
	let userAnswer = [];
	let useCheckAns;
	const getClassList = (j, i) => {
		const que = JSON.parse(data[currentQuestion].content_text).question; // for collecting the queston
		const ans = JSON.parse(data[currentQuestion].content_text).answers[j].is_correct; // for collection the correct or incorrect answer(1 or 0)
		const id = JSON.parse(data[currentQuestion].content_text).answers[j].id; // for collecting the answer id(choose by user when click on radio button)
		// if user selected more than one questions
		if (userAnswer.length > 0) {
			useCheckAns = {
				quesNo: i + 1,
				userId: id,
				userQue: que,
				userAns: ans,
				userOptionCheck: j
			};
			// for comparing the duplicacy of question, which will further use to calculate incorrect questions.
			for (let i = 0; i <= 3; i++) {
				if (userAnswer[i].userQue == useCheckAns.userQue) {
					userAnswer[i] = useCheckAns;
					break;
				} else {
					userAnswer.push(useCheckAns);
				}
			}
		}
		// if user select only one question
		if (userAnswer.length == 0) {
			userAnswer.push({
				quesNo: i + 1,
				userId: id,
				userQue: que,
				userAns: ans,
				userOptionCheck: j
			});
		}
		// if the duplicacy will be, the remove the duplicacy here
		// acc is target, cur is source
		let userSelected = Object.values(
			userAnswer.reduce((acc, cur) => Object.assign(acc, { [cur.userQue]: cur }), {})
		);

		// all attempted question store here
		$answerCheckedByUser = userSelected;
	};
</script>

<Header />

<div id="AllData">
	{#each data as data, i}
		{#if currentQuestion === i}
			<div>
				<h2>Q{i + 1}.{JSON.parse(data.content_text).question}</h2>
				<br />
				<div>
					{#each JSON.parse(data.content_text).answers as answers, j}
						<div id="answer">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label>
								<div id="label1">{j + 1}.</div>
								<div>
									<input
										type="radio"
										value={answers.answer}
										name="answer"
										id="radio{j}"
										on:click={() => getClassList(j, i)}
										bind:group={selected[i]}
									/>

									{@html answers.answer}
								</div>
							</label>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{/each}
</div>

<Footer_TestPage
	on:increment={inCurrentQuestion}
	on:decrement={deCurrentQuestion}
	count={currentQuestion + 1}
	on:changeQuestion={changeQuestion}
	currentData={currentQuestion}
/>

<style>
	label {
		font-size: 20px;
		display: flex;
	}
	#label1 {
		margin-right: 5px;
	}
	#AllData {
		margin: 100px 200px 0px 310px;
	}
</style>
