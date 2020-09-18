import { gql } from 'apollo-boost'

export const getVehicles = gql`
query getVehicles {
  vehicles (first: 30) {
    nodes {
      vin
      model {
        name
      }
    }
  }
}
`