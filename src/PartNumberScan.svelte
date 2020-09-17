<script>
  export let vehicleComponent = {};
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { fromEvent } from "rxjs";
  import { map, debounceTime, scan } from "rxjs/operators";

  let dispatch = createEventDispatcher();
  let eventName = "part-numbers";

  let part_no = null;
  let scan_1 = null;
  let scan_2 = null;

  let textInput = null;
  let obs = null;

  onMount(() => {
    obs = fromEvent(textInput, "keyup").pipe(
      debounceTime(500),
      map((e) => e.target.value)
    );
  });

  $: {
	part_no = $obs;
	if (textInput) {
		set_scan_1_scan_2()
	}
  }

  function set_scan_1_scan_2() {
	if (part_no === scan_1 || part_no === scan_2) {
		console.log('already exists', part_no)
	} else if (!scan_1) {
		scan_1 = part_no
	} else if (!scan_2) {
		scan_2 = part_no
	}
	dispatch(eventName, { scan_1, scan_2 })
	textInput.value = ""
  }

  function reset() {
    scan_1 = null;
    scan_2 = null;
    dispatch(eventName, { scan_1, scan_2 });
  }
</script>

<style>
  .two-col {
    display: grid;
    grid-template-columns: 1fr 60px;
  }

  .two-col .reset {
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .form {
    padding: 0.5rem 1rem;
    background: #fff;
  }
  input {
    width: 100%;
  }

  .detail {
    padding: 1rem;
    background: #eee;
  }

  .title {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
  }
</style>

<div class="two-col">
  <div class="form">
    <div class="title">
      {vehicleComponent.component.code} Part / Serial Number
    </div>

	{#if !scan_1 || !scan_2}
		<input type="text" bind:this={textInput} />
	{/if}
 

    <div class="detail">
      {#if scan_1}
        <div>scan 1: {scan_1}</div>
      {/if}
      {#if scan_2}
        <div>scan 2: {scan_2}</div>
      {/if}
    </div>
  </div>
  <div class="reset">
    {#if scan_1 || scan_2}<button on:click={reset}> Reset </button>{/if}
  </div>
</div>
