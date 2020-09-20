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
    scan_1: null,
    scan_2: null,
  };

  function vehicleSelected(e) {
    state = {
      ...state,
      vehicle_state: {
        data: e.detail.data,
        error: e.detail.error,
      },
    };
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
    if (!state.vehicle_component_state.data) {
      state.scan_1 = null;
      state.scan_2 = null;
    }
  }

  function partNumbersScanned(e) {
    let { scan_1, scan_2 } = e.detail;
    state = { ...state, scan_1, scan_2 };
  }
</script>

<style>
  .grid {
    display: grid;
    grid-gap: 0.5rem;
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
        on:part-numbers={partNumbersScanned} />
    {/if}
  {/if}
</div>
