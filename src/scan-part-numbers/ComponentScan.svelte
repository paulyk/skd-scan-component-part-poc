<script>
  import VinScan from "./VinScan.svelte";
  import VehicleComponentScan from "./VehicleComponentScan.svelte";
  import PartNumberScan from "./PartNumberScan.svelte";

  let state = {
    vehicle: null,
    vehicleComponent: null,
    scan_1: null,
    scan_2: null,
  };

  function vehicleSelected(e) {
	state = { ...state, vehicle: e.detail };
	if (!state.vehicle) {
		state.vehicleComponent = null
	}
  }

  function vehicleComponentSelected(e) {
	state = { ...state, vehicleComponent: e.detail };
	if (!state.vehicleComponent) {
		state.scan_1 = null
		state.scan_2 = null
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
  <VinScan on:vehicle={vehicleSelected} />
  {#if state.vehicle}
    <VehicleComponentScan
      vehicle={state.vehicle}
      on:vehicle-component={vehicleComponentSelected} />
    {#if state.vehicleComponent}
      <PartNumberScan
        vehicleComponent={state.vehicleComponent}
        on:part-numbers={partNumbersScanned} />
    {/if}
  {/if}
</div>
