<script>
    let show = false;

    function toggle() {
        show = !show
    }
</script>

<style>
    .accordion {
        border: 1px solid #ddd;
    }

    .header-bar {
        height: 1rem;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 80px;
        padding: 1rem;
        
        cursor: pointer;
        background: #f9f9f9;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .body {
        border: none; 
    }
    .body.show {
        border: 1px solid #ddd;
        border-top: none;
    }
</style>

<div class="accordion">
    <div class="header-bar" on:click={toggle}>
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="icon">
            {show ? "hide": "show"}
        </div>
    </div>
    <div class="body" class:show={show}>
        {#if show}        
        <slot name="body" />
        {/if}
    </div>

</div>