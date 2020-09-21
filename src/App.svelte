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



  .wrap {
    width: 800px;
    margin: 0 auto;
  }

  .spacer {
    height: 500px;
  }
</style>

<div class="wrap">
  <VehicleInfo />
  <div>Scan / Type / Copy Paste here</div>
  <ComponentScan />
</div>
<div class="spacer" />
