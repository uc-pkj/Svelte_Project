<script>
	/* File name : ResultPage.svelte
		Description : Contain all result page data
		Author : Pankaj Kumar
		Version : 1
		Package : svelte_items
		Created : 15 March 2022
		Updated by : Pankaj Kumar
		Updated Date : 30 March 2022 */

	import Header from '../components/Header.svelte';

	import { onMount } from 'svelte';
	import { savedData, answerCheckedByUser, savedAnswers, reviewNavigator } from '../store.js';

	let correct = 0;
	let incorrect = 0;
	let percentage = 0;

	let actualCorrectArray = [];
	let answerChoosebyUserArray = [];
	let option = ['A', 'B', 'C', 'D']; // options for user to select

	$: for (let i = 0; i < $savedData.length; i++) {
		let correctIndex = 0;
		if ($savedAnswers[i]) {
			for (let j = 0; j < 4; j++) {
				if (JSON.parse($savedData[i].content_text).answers[j].answer == $savedAnswers[i]) {
					correctIndex = j;
				}
			}
		} else {
			correctIndex = null;
		}
		answerChoosebyUserArray[i] = correctIndex;
	}

	$: for (let i = 0; i < $savedData.length; i++) {
		let actualCorrect = 0;
		for (let j = 0; j < 4; j++) {
			if (JSON.parse($savedData[i].content_text).answers[j].is_correct == '1') {
				actualCorrect = j;
			}
		}
		actualCorrectArray[i] = actualCorrect;
	}

	onMount(() => {
		$answerCheckedByUser.sort(function (a, b) {
			return a.quesNo - b.quesNo;
		});
		for (let i = 0; i < $answerCheckedByUser.length; i++) {
			if ($answerCheckedByUser[i].userAns == 1) {
				correct = correct + 1;
				percentage = Math.round((correct / 11) * 100);
			} else {
				incorrect = incorrect + 1;
			}
		}
	});

	const reviewPage = () => {
		reviewNavigator.set(true);
	};

	let j;
	let unselected = [];
	let matched = [];
	for (let i = 0; i < $savedData.length; i++) {
		for (j = 0; j < $answerCheckedByUser.length; j++) {
			if (i + 1 == $answerCheckedByUser[j].quesNo) {
				matched[i] = i + 1;
				break;
			} else {
				matched[i] = 0;
			}
		}
		if (j >= $answerCheckedByUser.length) {
			unselected[i] = i + 1;
		}
	}

	// for showing number of attempted questions
	$: data2 = $savedAnswers.filter(Boolean);
</script>

<Header />
<main>
	<div id="OuterDiv">
		<div id="UpperBoxes">
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
				<h2>{11 - $answerCheckedByUser.length}</h2>
			</div>
			<div class="boxes">
				<p>Correct</p>
				<h2>{correct}</h2>
			</div>
			<div class="boxes">
				<p>Incorrect</p>
				<h2>{incorrect}</h2>
			</div>
			<div class="boxes">
				<p>Percentage</p>
				<h2>{percentage} %</h2>
			</div>
		</div>

		<div id="color">
			<h4 style="display:flex">
				(Attempted + Correct) : <span
					id="color1"
					style="display:inline-block; background-color:green; width:30px;height:20px"
				/>
			</h4>
			<h4 style="display:flex">
				(Attempted + InCorrect) : <span
					id="color2"
					style="display:inline-block; background-color:red; width:30px;height:20px"
				/>
			</h4>
			<h4 style="display:flex">
				(Correct Answers) : <span
					id="color3"
					style="display:inline-block; background-color:lightblue; width:30px;height:20px"
				/>
			</h4>
		</div>
		<div class="showques">
			{#each $savedData as item, i}
				<div id="QuesAndAns">
					<!-- for questions  -->
					<div id="TopQues">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<p class="bold">
							<a href={`Review/${i}`} on:click={reviewPage}
								>Q{i + 1}.{JSON.parse(item.content_text).question}</a
							>
						</p>
					</div>

					<!-- for answers  -->
					<div id="OptionAndCorrect">
						<!-- show all answers  -->
						<div id="AnswersShow">
							{#each option as optionData, j}
								<div
									class="{`${actualCorrectArray[i] == j}`} border"
									class:selected={actualCorrectArray[i] != answerChoosebyUserArray[i] &&
									answerChoosebyUserArray[i] == j
										? true
										: false}
								>
									<p>{optionData}</p>
								</div>
							{/each}
						</div>
						<!-- user review about questions  -->
						<div id="CommentBased">
							{#each $answerCheckedByUser as selectQue}
								{#if i + 1 == selectQue.quesNo}
									{#if selectQue.userAns == 0}
										<p>INCORRECT</p>
									{:else}
										<p id="correct">CORRECT</p>
									{/if}
								{/if}
							{/each}
							{#each unselected as un}
								{#if i + 1 == un}
									<p>UNATTEMPTED</p>
								{/if}
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>
<div id="RestartBtnDiv">
	<a href="/">
		<button class="RestartBtn">Restart</button>
	</a>
</div>

<style>
	#color {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 15px;
		width: 800px;
	}
	#color > h4 {
		margin-bottom: 5px;
	}
	#color1 {
		border: 1px solid black;
	}
	#color2 {
		border: 1px solid black;
	}
	#color3 {
		border: 1px solid black;
	}
	#OuterDiv {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#UpperBoxes {
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
	.showques {
		margin: 20px 50px;
		width: 1000px;
		border: 2px solid black;
		border-radius: 9px;
		padding: 5px;
	}
	#QuesAndAns {
		display: flex;
	}
	#TopQues {
		display: block;
		font-size: 18px;
		margin: 5px;
		white-space: nowrap;
		width: 720px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	#TopQues:hover {
		text-decoration: underline;
	}
	.bold {
		font-weight: bold;
	}
	#OptionAndCorrect {
		display: flex;
	}
	#AnswersShow {
		display: flex;
	}
	.true {
		background-color: lightblue;
	}
	#correct {
		background-color: green;
		color: white;
		width: 100px;
		text-align: center;
	}
	.selected {
		background-color: red;
		color: white;
	}
	.border {
		border: 1px solid black;
		border-radius: 5px;
		width: 25px;
		text-align: center;
		padding: 2px;
		margin: 2px;
	}
	#CommentBased {
		margin-left: 5px;
	}
	#RestartBtnDiv {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.RestartBtn {
		text-align: center;
		width: 90px;
		height: 43px;
		border-radius: 5px;
		align-items: center;
		font-size: 20px;
		padding: 5px;
		border-color: rgb(1, 112, 34);
		font-family: cursive;
		background-color: lightcoral;
		color: white;
	}
	a {
		text-decoration: none;
		color: black;
		font-size: 18px;
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
