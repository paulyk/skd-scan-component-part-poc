<script lang="ts">
  import VehicleInfo from "./components/VehicleInfo.svelte";
  import ComponentScan from "./scan-part-numbers/ComponentScan.svelte";

  import { createClient } from "./skd-data";
  let url = "http://localhost:5100/gql/";
  createClient(url);
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
