<script>
  import ComponentScan from "./ComponentScan.svelte";
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
</style>

<h1>Component Scan Demo</h1>
<div class="wrap">
  <ComponentScan />
</div>
