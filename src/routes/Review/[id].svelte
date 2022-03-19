<script context="module">
	export const load = ({ params }) => {
		const id = params.id;
		return {
			props: {
				id: id
			}
		};
	};
</script>

<script>
	import Header from '../../components/Header.svelte'
	import { saveddata, answerCheckedByUser, reviewNavigator } from '../../store.js';
	import Footer1 from '../../components/Footer1.svelte';
	import { onDestroy } from 'svelte';
	export let id;
	let pageNo = Number(id); 
	let explanationAnswer; 
	// let spicitstr=explanationAnswer
	$: if (pageNo + 1) {
		// explanationAnswer = JSON.parse($saveddata[pageNo+1].content_text).explanation;
		explanationAnswer = JSON.parse($saveddata[pageNo].content_text).explanation;
		let indexOfSeq = explanationAnswer.indexOf('<seq');
		while (indexOfSeq > -1) {
			let str1 = explanationAnswer.substr(indexOfSeq, 14);
			let currectAnswer = explanationAnswer.charAt(indexOfSeq + 9);
			currectAnswer = currectAnswer.toUpperCase();
			explanationAnswer = explanationAnswer.replace(str1, currectAnswer);
			indexOfSeq = explanationAnswer.indexOf('<seq');
		}
	}
	// updating the question from sidebar list question
	const upDateQuestionPage = (event) => {
		pageNo = event.detail;
	};
	// for next button
	const incrementPage = () => {
		pageNo = pageNo + 1;
	};
	// for previous button
	const decrementPage = () => {
		pageNo = pageNo - 1;
	};
	onDestroy(() => {
		reviewNavigator.update((x) => {
			return (x = false);
		});
	});

	// const 

</script>

<Header />
<div class="reviewPage">
	<div class="questionsContainer">
		{#each $saveddata as data, i}
			{#if pageNo == i}
				<div class="question">
					<h3>
						Q{i + 1} . {JSON.parse(data.content_text).question}
					</h3>
					<div class="answer">
						<div class="answerOption">
							{#each JSON.parse(data.content_text).answers as answers, j}
								{#if answers.is_correct == 1}
									<label class="answerOptionData">
										<input
											type="radio"
											class="hello"
											value={j}
											name="radio"
											bind:group={answers}
											disabled
										/>
										{@html answers.answer}
									</label>
								{:else}
									<label class="answerOptionData">
										<input type="radio" name="radio" disabled />
										{@html answers.answer}
									</label>
								{/if}
							{/each}
						</div>
					</div>
					{#each JSON.parse(data.content_text).answers as answersCorrect}
						{#if answersCorrect.is_correct == 1}
							<div class="explanation">
								<p>{@html explanationAnswer}</p>
								<!-- <p>{@html spicitstr}</p> -->
							</div>
						{/if}
					{/each}
					{#each $answerCheckedByUser as user}
						{#if i + 1 == user.quesNo}
							{#if user.userAns == '1'}
								<div class="comparationResult">
									<h3>Correct</h3>
								</div>
							{:else}
								<div class="incomparationResult">
									<h3>Incorrect</h3>
								</div>
							{/if}
						{/if}
					{/each}
				</div>
			{/if}
		{/each}
	</div>
</div>
<div class="textPage__option">
	<Footer1
		currentdata={pageNo}
		on:changques={upDateQuestionPage}
		on:increment={incrementPage}
		on:decrement={decrementPage}
		count={pageNo + 1}
	/>
</div>

<style>
	.reviewPage{
		margin-top: 100px;
	}
	label {
		display: flex;
		align-items: center;
	}
	label > input {
		margin-right: 10px;
	}
	.comparationResult > h3 {
		text-align: center;
		background-color: green;
		color: white;
		padding: 5px;
		border-radius: 5px;
	}
	.incomparationResult>h3{
		text-align: center;
		background-color: red;
		color: white;
		padding: 5px;
		border-radius: 5px;

	}
	.hello {
		border: 2px solid white;
		box-shadow: 0 0 0 1px #392;
		appearance: none;
		border-radius: 50%;
		width: 12px;
		height: 12px;
		background-color: green;
		transition: all ease-in 0.2s;
	}
	.explanation {
		background-color: rgba(4, 84, 245, 0.877);
		color: white;
		padding: 8px;
		margin-top: 50px;
		border-radius: 5px;
		margin-bottom: 5px;
	}
	.questionsContainer {
		max-width: 800px;
		margin: 0 auto;
	}
	.answer {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
	}
	.answerOption {
		display: flex;
		flex-direction: column;
	}
	.answerOptionData {
		margin-top: 8px;
	}
	.textPage__option {
		position: fixed;
		bottom: 10px;
		right: 20px;
		width: 50%;
		border: 1px solid lightgray;
	}
</style>
