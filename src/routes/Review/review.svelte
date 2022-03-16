<script>
    import {saveddata} from 'src/store.js';
    
</script>
<main>
    {#each $saveddata as item,i}
        <p>{JSON.parse(item[i].content_text).explanation}</p>
		

    {/each}
</main>

<style>

</style>