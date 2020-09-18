<script>
  export let vehicleComponent = {};
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { fromEvent } from "rxjs";
  import { map, debounceTime, scan } from "rxjs/operators";
import { text } from "svelte/internal";

  let dispatch = createEventDispatcher();
  let eventName = "part-numbers";

  let part_no = null;
  let state = {
	  scan_1: null,
	  scan_2: null
  }

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
		textInput.value = ""
	}
  }

  function set_scan_1_scan_2() {
	if (part_no === state.scan_1 || part_no === state.scan_2) {
		console.log('already exists', part_no)
	} else if (!state.scan_1) {
		state = {...state, scan_1: part_no }
	} else if (!state.scan_2) {
		state = {...state, scan_2: part_no }
	}
	dispatch(eventName, state)
  }

  function reset() {
	state.scan_1 = ""
	state.scan_2 = ""
	state = state
    dispatch(eventName, state);
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

	{#if !state.scan_1 || !state.scan_2}
		<input type="text" bind:this={textInput} />
	{/if}
 

    <div class="detail">
      {#if state.scan_1}
        <div>scan 1: {state.scan_1}</div>
      {/if}
      {#if state.scan_2}
        <div>scan 2: {state.scan_2}</div>
      {/if}
    </div>
  </div>
  <div class="reset">
    {#if state.scan_1 || state.scan_2}<button on:click={reset}> Reset </button>{/if}
  </div>
</div>
