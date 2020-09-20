import type { ApolloClient, ApolloQueryResult } from "apollo-boost";
import type { Vehicle, VehicleByVinQuery, VehicleByVinQueryVariables, VehiclesQuery } from "../generated/graphql";
import { GET_VEHICLES, GET_VEHICLE_BY_VIN } from "../graphql/query";


export class QueryService {

    client: ApolloClient<any>
    constructor(client: ApolloClient<any>) {
        this.client = client
    }
    
    getVehicles = async (): Promise<ApolloQueryResult<VehiclesQuery>> => {
        return this.client.query({
            query: GET_VEHICLES
        })
    }

    getGetVehicleByVIN = async (vin: string): Promise<ApolloQueryResult<VehicleByVinQuery>> => {
        return this.client.query<VehicleByVinQuery, VehicleByVinQueryVariables>({
            query: GET_VEHICLE_BY_VIN,
            variables: {
                vin
            }
        })
    }
}