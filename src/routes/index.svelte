<script>
	import Header from '../components/Header.svelte';
</script>

<Header />
<div id="startTest">
	<!-- <button><a href="/testPage" accesskey="s">Start Test</a></button> -->
	<button><a href="/testPage" accesskey="s">Start Test</a></button>
</div>

<style>
	#startTest {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 99vh;
		min-width: 130px;
	}
	#startTest > button {
		padding: 10px;
		width: 130px;
		font-size: 20px;
		border: 2px solid black;
		border-radius: 5px;
	}
    a{
        text-decoration: none;
        color: black;
    }
</style>
