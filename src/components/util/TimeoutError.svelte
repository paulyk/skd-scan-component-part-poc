<script lang="ts">
import { onDestroy } from "svelte";

    export let delay = 3000
    export let errors: string[] = null

    let timeout = null
    $: {
        errors: console.log('errors triggerd', errors)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            errors = null
            console.log('clear error timeout')
            clearTimeout(timeout)
        }, delay)
    }

</script>

<style>
 
</style>

<div class="error">
    {#if errors}
        {#each errors as error}
            <div>{error}</div>
        {/each}
    {/if}
</div>