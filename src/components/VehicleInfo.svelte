<script lang="ts">
  import Accordion from "./Accordion.svelte";
  import type { ApolloQueryResult } from "apollo-boost";
  import type { VehiclesQuery } from "../generated/graphql";
  import { getQueryService } from "../services/dataService";

  console.log("vehicle info part two");

  let vehiclesQueryResult: ApolloQueryResult<VehiclesQuery>;
  let components: String[] = [];

  let queryService = getQueryService();
  //
  load();

  async function load() {
    console.log("loading.....");
    vehiclesQueryResult = await queryService.getVehicles();
    let firstVehilce = vehiclesQueryResult.data.vehicles.nodes[0];
    components = firstVehilce.vehicleComponents.map((vc) => vc.component.code);
  }
</script>

<style>
  .cols {
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .vin-list {
    display: grid;
    grid-gap: 0.8rem;
    grid-template-columns: 1fr 1fr;
  }
  .item {
    padding: 0.3rem 1rem;
  }

  .code {
    padding: 0.2rem 0.3rem;
    border: 1px solid #999;
    border-radius: 4px;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<Accordion>
  <div slot="header">Select VIN and Component codes here</div>
  <div slot="body">
    <div class="cols">
      <div class="vin-list">
        {#each vehiclesQueryResult.data.vehicles.nodes as vehicle}
          <div class="item">{vehicle.vin}</div>
        {/each}
      </div>
      <div class="components">
        <div class="flex">
          {#each components as code}
            <span class="code">{code}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</Accordion>
