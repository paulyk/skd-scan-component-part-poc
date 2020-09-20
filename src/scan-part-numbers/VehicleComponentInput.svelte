<script lang="ts">
  import type { Vehicle } from "../generated/graphql";

  export let vehicle: Vehicle = null
  import { debounce } from "./util";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();
  let eventName = "vehicle-component";

  let state = {
    componentCode: "",
    data: null,
    error: null,
  };


  function handleInput() {
    try {
    state.data = getComponent(state.componentCode)
    state.error = state.data ? null : "Component not found"
    console.log('display state for vc', state)
    dispatch(eventName, state);
    } finally {
      state.componentCode = null
    }
  }

  function getComponent(code) {
    return  vehicle.vehicleComponents.find(
      (vc) => vc.component.code.toLowerCase() === code?.toLowerCase()
    );
  }

  function reset() {
    state.componentCode = null;
    state.data = null;
    state.error = null
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
    <div class="title">Vehicle Component</div>

    {#if !state.data}
      <input
        type="text"
        bind:value={state.componentCode}
        on:keyup={debounce(handleInput, 500)} />
    {/if}
    {#if state.data}
      <div class="detail">
        <div>{state.data.component.code}</div>
        <div>{state.data.component.name}</div>
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
