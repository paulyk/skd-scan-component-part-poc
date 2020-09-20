
import type { Vehicle } from '../interface'
import { delay } from '../util';
import { vehicles } from './mock-data'

export const getGetVehicleByVIN = async (vin: string) : Promise<Vehicle>  =>  {
    await delay(500)
    return vehicles.find(t => t.vin === vin)
}

export const getVehicles = async (): Promise<Vehicle[]> => {
    await delay(500)
    return vehicles
}