<script lang="ts">
  import VinInput from "./VinInput.svelte";
  import VehicleComponentInput from "./VehicleComponentInput.svelte";
  import PartNumberInput from "./PartNumberInput.svelte";

  let state = {
    vehicle_state: {
      data: null,
      error: null,
    },
    vehicle_component_state: { 
      data: null, 
      error: null 
    },
    part_numbers_state: {
      data: null,
      error: null
    }
  };

  function vehicleSelected(e) {
    state = {
      ...state,
      vehicle_state: {
        data: e.detail.data,
        error: e.detail.error,
      },
    };

    // clear  vehicle_component_state if no vehicle
    if (!state.vehicle_state.data) {
      state.vehicle_component_state = { data: null, error: null }
    }
  }

  function vehicleComponentSelected(e) {
    state = { ...state, 
      vehicle_component_state:  {
        data: e.detail.data,
        error: e.detail.error,
      },
    };

    // clear part_numbers_state if no vehicle_component
    if (!state.vehicle_component_state.data) {
      state.part_numbers_state.data = null;
      state.part_numbers_state.error = null;
    }
  }

  function partNumbersSelected(e) {
    state = { ...state, 
      part_numbers_state:  {
        data: e.detail.data,
        error: e.detail.error,
      },
    };
  }
</script>

<style>
  .grid {
    /* display: grid;
    grid-gap: 0.5rem; */
    background: #fff;
  }
</style>

<div class="grid">
  <VinInput on:vehicle={vehicleSelected} />
  {#if state.vehicle_state.data}
    <VehicleComponentInput
      vehicle={state.vehicle_state.data}
      on:vehicle-component={vehicleComponentSelected} />
    {#if state.vehicle_component_state.data}
      <PartNumberInput
        vehicleComponent={state.vehicle_component_state.data}
        on:part-numbers={partNumbersSelected} />
    {/if}
  {/if}
</div>
