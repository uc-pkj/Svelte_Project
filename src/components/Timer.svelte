<script>
	import { tweened } from 'svelte/motion';
	let original = 2 * 60;
	// let original = 1 * 2;
	let timer = tweened(original);
	setInterval(() => {
		if ($timer > 0) $timer--;
	}, 1000);

	$: minutes = Math.floor($timer / 60);
	$: minname = minutes > 1 ? ':' : ':';
	$: seconds = Math.floor($timer - minutes * 60);

	$: if(minutes<1 && seconds<=1){timemodal_show=true}

	// when times up this is called
	import Timesuppage from './Timesuppage.svelte';
	let timemodal_show = false;
</script>

<Timesuppage bind:show={timemodal_show} />
<main>
	<p>0{minutes}{minname}{seconds < 10 ? '0' + seconds : seconds}</p>
</main>

<style>
	p {
		font-size: 18px;
	}
</style>
