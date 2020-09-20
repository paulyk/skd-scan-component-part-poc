<script lang="ts">
  import { vehicles } from "../data";
  import { createEventDispatcher } from "svelte";
  import { debounce } from "./util";

  let dispatch = createEventDispatcher();
  let eventName = "vehicle";

  let state = {
    vin: "",
    vehicle: null
  }

  function getVehicle() {
    state.vehicle = vehicles.find((v) => v.vin === state.vin);
    if (state.vehicle) {
      dispatch(eventName, { data: state.vehicle, error: null });
    } else {
      dispatch(eventName, { data: null, error: 'Not found or not a VIN'})
    }
  }

  function reset() {
    state.vehicle = null;
    state.vin = null;
    dispatch(eventName, { data: null, error: null});
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

    {#if !state.vehicle}
      <input
        type="text"
        bind:value={state.vin}
        on:keyup={debounce(getVehicle, 500)} />
    {:else}
      <div class="detail">
        <div>{state.vehicle.vin}</div>
        <div>{state.vehicle.model.name}</div>
      </div>
    {/if}
  </div>
  <div class="reset">
    {#if state.vehicle}<button on:click={reset}> Reset </button>{/if}
  </div>
</div>
