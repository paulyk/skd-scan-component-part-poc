<script lang="ts">
  import { vehicles } from "../data";
  import { createEventDispatcher } from "svelte";
  import { debounce } from "./util";

  let dispatch = createEventDispatcher();
  let eventName = "vehicle";

  let state = {
    vin: "",
    data: null,
    error: null,
  };

  function handleInput() {
    try {
      state.data = getVehicle(state.vin)
      state.error = state.data ? null : "vehicle not found";
      console.log('dispatch ', state)
      dispatch(eventName, state );
    } finally {
      state.vin = null
    }
  }

  function getVehicle(vin) {
    return vehicles.find((v) => v.vin === state.vin);
  }

  function reset() {
    state.data = null;
    state.error = null;
    state.vin = null;
    dispatch(eventName, state );
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
    <div class="title">VIN</div>

    {#if !state.data}
      <input
        type="text"
        bind:value={state.vin}
        on:keyup={debounce(handleInput, 500)} />
    {/if}
    {#if state.data}
      <div class="detail">
        <div>{state.data.vin}</div>
        <div>{state.data.model.name}</div>
      </div>
    {/if}
    {#if state.error}
      <div class="detail">
        <div>{state.error}</div>
      </div>
    {/if}
  </div>
  <div class="reset">
    {#if state.data}<button on:click={reset}> Reset </button>{/if}
  </div>
</div>
