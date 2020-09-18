<script lang="ts">
  import { getClient } from "../../skd-data";
  import type { ApolloQueryResult } from "apollo-boost";
  import type {
    GetVehiclesQuery,
    GetVehiclesQueryVariables,
  } from "../../generated/graphql";
  import { getVehicles } from "../../graphql/query";

  let client = getClient();
  type LoadingState = "idle" | "pending" | "fulfilled" | "error";
  let result: ApolloQueryResult<GetVehiclesQuery> = null;

  interface State {
    loading: LoadingState;
    result?: ApolloQueryResult<GetVehiclesQuery>;
    error: any;
  }

  const state: State = {
    loading: "idle",
    result: null,
    error: null,
  };

  load();

  async function load() {
    console.log("loading");
    state.loading = "pending";
    try {
      state.result = await client.query<GetVehiclesQuery, GetVehiclesQueryVariables>({
        query: getVehicles,
      });
      state.loading = 'fulfilled'
      console.log("loaded", state.result);
    } catch (err) {
      state.error = err;
    }
  }
</script>

<h2>Vehicles</h2>
{#if state.loading === 'pending'}
  loading...
{:else if state.loading === 'fulfilled'}
  <pre>{JSON.stringify(state.result, null, 2)}</pre>
{:else if state.loading === 'error'}error{/if}
