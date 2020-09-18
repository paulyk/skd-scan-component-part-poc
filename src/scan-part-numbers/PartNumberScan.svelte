<script>
  export let vehicleComponent = {};
  import { debounce } from './util'
  import { createEventDispatcher } from "svelte";
  
  let dispatch = createEventDispatcher();
  let eventName = "part-numbers";

  let scans = {
    scan_1: null,
    scan_2: null,
  };

  let textInput = null;


  function set_scan_1_scan_2(e) {
    let part_no = e.target.value
    if (part_no === scans.scan_1 || part_no === scans.scan_2) {
      console.log("already exists", part_no);
    } else if (!scans.scan_1) {
      scans = { ...scans, scan_1: part_no };
    } else if (!scans.scan_2) {
      scans = { ...scans, scan_2: part_no };
    }
    dispatch(eventName, scans);
    textInput.value = "";
  }

  function reset() {
    scans.scan_1 = "";
    scans.scan_2 = "";
    scans = scans;
    dispatch(eventName, scans);
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
    <div class="title">
      {vehicleComponent.component.code} Part / Serial Number
    </div>

    {#if !scans.scan_1 || !scans.scan_2}
      <input type="text" bind:this={textInput} on:keyup={debounce(set_scan_1_scan_2, 500)}/>
    {/if}

    <div class="detail">
      {#if scans.scan_1}
        <div>scan 1: {scans.scan_1}</div>
      {/if}
      {#if scans.scan_2}
        <div>scan 2: {scans.scan_2}</div>
      {/if}
    </div>
  </div>
  <div class="reset">
    {#if scans.scan_1 || scans.scan_2}
      <button on:click={reset}> Reset </button>
    {/if}
  </div>
</div>
