<script>
  import { vehicles } from "../data";
  import { createEventDispatcher } from "svelte";
  import { debounce } from "./util";

  let dispatch = createEventDispatcher();
  let eventName = "vehicle";
  let vin = "";
  let vehicle = null;

  function getVehicle() {
    vehicle = vehicles.find((v) => v.vin === vin);
    if (vehicle) {
      dispatch(eventName, vehicle);
    }
  }

  function reset() {
    vehicle = null;
    vin = null;
    dispatch(eventName, null);
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

    {#if !vehicle}
      <input
        type="text"
        bind:value={vin}
        on:keyup={debounce(getVehicle, 500)} />
    {:else}
      <div class="detail">
        <div>{vehicle.vin}</div>
        <div>{vehicle.model.name}</div>
      </div>
    {/if}
  </div>
  <div class="reset">
    {#if vehicle}<button on:click={reset}> Reset </button>{/if}
  </div>
</div>
