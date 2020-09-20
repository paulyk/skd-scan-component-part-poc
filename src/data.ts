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
  model: VehicleModel
  vehicleComponents: VehicleComponent[]
}

export let vehicles: Array<Vehicle> = [
  {
    vin: "MNCUMNF50JW795262",
    model: {
      code: "ZRAE9GD0010",
      name: "U375 XLT 2.0L SG DSL PANTHER-B 2WHD AUTO HONEY GOLD",
    },
    vehicleComponents: [
      {
        id: "4a728a1b-c36f-4181-3385-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
      {
        id: "155a5b90-7d28-4733-3386-08d8598cbd8f",
        component: {
          code: "ENL",
          name: "Engine Legal Code",
        },
      },
      {
        id: "3a245928-1969-44ba-3387-08d8598cbd8f",
        component: {
          code: "FT",
          name: "Fuel Tank",
        },
      },
      {
        id: "b026e4bd-c62d-4a70-3388-08d8598cbd8f",
        component: {
          code: "TC",
          name: "Transfer Case",
        },
      },
      {
        id: "5a311e88-47cb-48ae-3389-08d8598cbd8f",
        component: {
          code: "TR",
          name: "Transmission",
        },
      },
      {
        id: "c66d4d2e-1f07-4688-338a-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
      {
        id: "2d57363f-f73e-4225-338b-08d8598cbd8f",
        component: {
          code: "VIN",
          name: "Marry Body & Frame Check",
        },
      },
      {
        id: "d4e0da55-25dd-41cf-338c-08d8598cbd8f",
        component: {
          code: "DA",
          name: "Driver Airbag",
        },
      },
      {
        id: "38cf1f5e-2312-4ab6-338d-08d8598cbd8f",
        component: {
          code: "DKA",
          name: "Driver Knee Airbag",
        },
      },
      {
        id: "cf8d0e10-0725-4468-338e-08d8598cbd8f",
        component: {
          code: "DSC",
          name: "Driver Side Air Curtain",
        },
      },
      {
        id: "18e2c90a-0907-4574-338f-08d8598cbd8f",
        component: {
          code: "PA",
          name: "Passenger Airbag",
        },
      },
      {
        id: "600c8f06-0f13-43d7-3390-08d8598cbd8f",
        component: {
          code: "PS",
          name: "Passenger Side Airbag",
        },
      },
      {
        id: "5892676d-8c0c-4afa-3391-08d8598cbd8f",
        component: {
          code: "DS",
          name: "Driver Side Airbag",
        },
      },
      {
        id: "1620eab9-8fc1-4dfd-3392-08d8598cbd8f",
        component: {
          code: "IK",
          name: "Ignition Key Code",
        },
      },
      {
        id: "482f7d92-ac66-4f03-3393-08d8598cbd8f",
        component: {
          code: "PSC",
          name: "Passenger Side Air Curtain",
        },
      },
      {
        id: "33935626-f82b-4abb-3394-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
    ],
  },
  {
    vin: "MNCUMNF50JW795267",
    model: {
      code: "ZRAE9GD9999",
      name: "U375 LTD 2.0L BI DSL PANTHER-C 4WHD AUTO COGNAC",
    },
    vehicleComponents: [
      {
        id: "3891dded-eed1-4271-3375-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
      {
        id: "f06a0605-eb7f-468e-3376-08d8598cbd8f",
        component: {
          code: "ENL",
          name: "Engine Legal Code",
        },
      },
      {
        id: "84dff705-2395-4317-3377-08d8598cbd8f",
        component: {
          code: "FT",
          name: "Fuel Tank",
        },
      },
      {
        id: "e0c03bba-f027-4b31-3378-08d8598cbd8f",
        component: {
          code: "TC",
          name: "Transfer Case",
        },
      },
      {
        id: "dfe38467-16f4-4766-3379-08d8598cbd8f",
        component: {
          code: "TR",
          name: "Transmission",
        },
      },
      {
        id: "3413b13b-9088-4eae-337a-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
      {
        id: "3b0c763d-06d9-46be-337b-08d8598cbd8f",
        component: {
          code: "VIN",
          name: "Marry Body & Frame Check",
        },
      },
      {
        id: "75ae891e-2642-4b18-337c-08d8598cbd8f",
        component: {
          code: "DA",
          name: "Driver Airbag",
        },
      },
      {
        id: "4c069efd-1d00-4b10-337d-08d8598cbd8f",
        component: {
          code: "DKA",
          name: "Driver Knee Airbag",
        },
      },
      {
        id: "3147a1de-4892-4b83-337e-08d8598cbd8f",
        component: {
          code: "DSC",
          name: "Driver Side Air Curtain",
        },
      },
      {
        id: "6e6ba181-dc38-4801-337f-08d8598cbd8f",
        component: {
          code: "PA",
          name: "Passenger Airbag",
        },
      },
      {
        id: "4799e6b8-84a1-4c0d-3380-08d8598cbd8f",
        component: {
          code: "PS",
          name: "Passenger Side Airbag",
        },
      },
      {
        id: "99309262-52c5-4f7a-3381-08d8598cbd8f",
        component: {
          code: "DS",
          name: "Driver Side Airbag",
        },
      },
      {
        id: "2a0db09b-d1bc-4151-3382-08d8598cbd8f",
        component: {
          code: "IK",
          name: "Ignition Key Code",
        },
      },
      {
        id: "241279e7-b2bb-4393-3383-08d8598cbd8f",
        component: {
          code: "PSC",
          name: "Passenger Side Air Curtain",
        },
      },
      {
        id: "f8651ce3-8c54-44f2-3384-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
    ],
  },
  {
    vin: "MNCUMNF80JW795260",
    model: {
      code: "ZRAE9PQ0010",
      name: "U375 XLT 2.0L SG DSL PANTHER-B 2WHD AUTO EBONY",
    },
    vehicleComponents: [
      {
        id: "438eaebd-c867-4757-3365-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
      {
        id: "a0bb844b-e9b1-444f-3366-08d8598cbd8f",
        component: {
          code: "ENL",
          name: "Engine Legal Code",
        },
      },
      {
        id: "768ac3dc-4d61-4741-3367-08d8598cbd8f",
        component: {
          code: "FT",
          name: "Fuel Tank",
        },
      },
      {
        id: "74777b7b-e6a4-487c-3368-08d8598cbd8f",
        component: {
          code: "TC",
          name: "Transfer Case",
        },
      },
      {
        id: "d349a729-74bb-4c81-3369-08d8598cbd8f",
        component: {
          code: "TR",
          name: "Transmission",
        },
      },
      {
        id: "3e94d24e-9a7b-4b43-336a-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
      {
        id: "8eac0d86-c864-497f-336b-08d8598cbd8f",
        component: {
          code: "VIN",
          name: "Marry Body & Frame Check",
        },
      },
      {
        id: "503689f4-7dfd-476f-336c-08d8598cbd8f",
        component: {
          code: "DA",
          name: "Driver Airbag",
        },
      },
      {
        id: "5921300c-b0d4-4348-336d-08d8598cbd8f",
        component: {
          code: "DKA",
          name: "Driver Knee Airbag",
        },
      },
      {
        id: "8e45eeb0-fabe-4172-336e-08d8598cbd8f",
        component: {
          code: "DSC",
          name: "Driver Side Air Curtain",
        },
      },
      {
        id: "c8254607-2474-4369-336f-08d8598cbd8f",
        component: {
          code: "PA",
          name: "Passenger Airbag",
        },
      },
      {
        id: "82471b15-3c09-4727-3370-08d8598cbd8f",
        component: {
          code: "PS",
          name: "Passenger Side Airbag",
        },
      },
      {
        id: "fad95d09-4d30-4a29-3371-08d8598cbd8f",
        component: {
          code: "DS",
          name: "Driver Side Airbag",
        },
      },
      {
        id: "81fa36d3-9f58-4d8a-3372-08d8598cbd8f",
        component: {
          code: "IK",
          name: "Ignition Key Code",
        },
      },
      {
        id: "0eaf3968-f805-4a94-3373-08d8598cbd8f",
        component: {
          code: "PSC",
          name: "Passenger Side Air Curtain",
        },
      },
      {
        id: "ef73ea5f-0857-431b-3374-08d8598cbd8f",
        component: {
          code: "EN",
          name: "Engine",
        },
      },
    ],
  },
];
