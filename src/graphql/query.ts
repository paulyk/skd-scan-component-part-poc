import { gql } from 'apollo-boost'

export const GET_VEHICLES = gql`
query vehicles {
  vehicles (first: 30) {
    nodes {
      vin
      model {
        code
        name
      }
      vehicleComponents {
        id
        component {
          code
          name
        }
      }
    }
  }
}
`

export const GET_VEHICLE_BY_VIN = gql`
query vehicleByVin($vin: String!){
  vehicleByVIN(vin: $vin){
    id
   	vin
    createdAt
    removedAt
    plannedBuildAt
    model {
      code
      name
    }
    vehicleComponents {
      id
      component {
        code
        name
      }
    }
  }
}
`

