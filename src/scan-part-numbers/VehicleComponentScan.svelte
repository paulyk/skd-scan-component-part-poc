<script>
	export let vehicle = {}
	import { createEventDispatcher } from 'svelte'

	let dispatch = createEventDispatcher()
	let eventName = 'vehicle-component'
	
	let componentCode = ""
	let vehicleComponent = null
	
	$: {

	}

	function getComponent() {
		vehicleComponent = vehicle.vehicleComponents.find(vc => vc.component.code.toLowerCase() === componentCode.toLowerCase())
		dispatch(eventName, vehicleComponent)
	}
	
	function reset() {
		componentCode = null
		vehicleComponent = null
		dispatch(eventName, null)
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
			 Vehicle Component 
		</div>
			
		{#if !vehicleComponent}
			<input type=text bind:value={componentCode} on:keyup={getComponent} />
    {:else}
			<div class="detail">
			  <div>{vehicleComponent.component.code}</div>	
				<div>{vehicleComponent.component.name}</div>	 
			</div>
		{/if}
	</div>
	<div class="reset">
		{#if vehicleComponent}
		<button on:click={reset}>
			Reset
		</button>
		{/if}
	</div>
</div>
