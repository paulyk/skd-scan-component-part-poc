<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";

  import { createEventDispatcher } from "svelte";
  import type { VehicleByVinQuery } from "../generated/graphql";
  import { getQueryService } from "../services/dataService";
  import { debounce } from "../util";

  let queryService = getQueryService();

  let dispatch = createEventDispatcher();
  let eventName = "vehicle";

  let temp: ApolloQueryResult<VehicleByVinQuery>;
  
  interface State {
    vin: string
    data: typeof temp.data.vehicleByVIN 
    error: string
  }

  let state: State = {
    vin: "",
    data: null,
    error: null,
  };

  async function handleInput() {
    try {
      let result = await queryService.getGetVehicleByVIN(state.vin);
      console.log("result: ** ", result.data)
      state.data = result.data.vehicleByVIN;
      state.error = state.data ? null : "vehicle not found";
      console.log("dispatch ", state);
      dispatch(eventName, state);
    } catch (err) {
      state.data = null;
      state.error = err.message;
      dispatch(eventName, state);
    } finally {
      state.vin = null;
    }
  }

  function reset() {
    state.data = null;
    state.error = null;
    state.vin = null;
    dispatch(eventName, state);
  }
</script>

<style>
 
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
