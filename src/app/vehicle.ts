import { MkItem } from './mk-item';
import { VehicleType } from './vehicle-type.enum';

export interface Vehicle extends MkItem {
    type: VehicleType;
}
