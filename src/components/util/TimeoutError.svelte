<script lang="ts">
    export let delay = 3000
    export let errors: string[] = null

    let timeout = null
    $: {
        errors: console.log('errors triggerd', errors)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            errors = null
        }, delay)
    }
</script>

<style>
    .error{
        
    }
</style>

<div class="error">
    {#if errors}
        {#each errors as error}
            <div>{error}</div>
        {/each}
    {/if}
</div>