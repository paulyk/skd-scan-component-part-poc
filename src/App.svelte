<script lang="ts">
  import VehicleInfo from "./components/VehicleInfo.svelte";
  import ComponentScan from "./scan-part-numbers/ComponentScan.svelte";
  import { setupDataService } from "./services/dataService"

  let url = window["skdGraphqlURI"]
  setupDataService(url);

</script>

<style>
  :global(body) {
    background: #f2f2f2;
  }

  h1 {
    text-align: center;
  }

  .wrap {
    width: 800px;
    margin: 0 auto;
  }

  .spacer {
    height: 500px;
  }
</style>

<h1>Component Scan Demo {new Date().getMinutes()  }</h1>
<div class="wrap">
  <VehicleInfo />
  <ComponentScan />
</div>
<div class="spacer" />
