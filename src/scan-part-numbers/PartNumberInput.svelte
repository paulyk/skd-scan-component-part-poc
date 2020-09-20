<script lang="ts">
  export let vehicleComponent: VehicleComponent = null
  import { debounce } from "./util";
  import { createEventDispatcher } from "svelte";
import type { VehicleComponent } from "../generated/graphql";

  let dispatch = createEventDispatcher();
  let eventName = "part-numbers";

  interface Data {
    scan_1: string;
    scan_2: string;
  }

  interface State {
    data: Data;
    error: string;
  }

  let state = {
    data: {
      scan_1: null,
      scan_2: null,
    },
    error: null,
  };

  let textInput = null;

  function handleInput(e) {
    try {
      let part_no: string= e.target.value;

      if (!part_no || part_no.length < 10) {
        console.log("part no less thtn 10 characters", part_no);
        return
      }

      if (part_no === state.data.scan_1 || part_no === state.data.scan_2) {
        console.log("already exists", part_no);
        return
      } else if (!state.data.scan_1) {
        state.data.scan_1 = part_no;
      } else if (!state.data.scan_2) {
        state.data.scan_2 = part_no;
      }
      dispatch(eventName, state);
    } finally {
      textInput.value = "";
    }
  }

  function reset() {
    state.data.scan_1 = "";
    state.data.scan_2 = "";
    state.error = null
    state = state;
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

    {#if !state.data.scan_1 || !state.data.scan_2}
      <input
        type="text"
        bind:this={textInput}
        on:keyup={debounce(handleInput, 500)} />
    {/if}

    <div class="detail">
      {#if state.data.scan_1}
        <div>scan 1: {state.data.scan_1}</div>
      {/if}
      {#if state.data.scan_2}
        <div>scan 2: {state.data.scan_2}</div>
      {/if}
    </div>
  </div>
  <div class="reset">
    {#if state.data.scan_1 || state.data.scan_2}
      <button on:click={reset}> Reset </button>
    {/if}
  </div>
</div>
