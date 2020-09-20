export interface Component {
    code: String
    name: string
  }
  export interface VehicleComponent {
    id: String
    component: Component
  }
  
  export interface VehicleModel {
    code: string
    name: string
  }
  
  export interface Vehicle {
    vin: string
    model?: VehicleModel
    vehicleComponents?: VehicleComponent[]
  }