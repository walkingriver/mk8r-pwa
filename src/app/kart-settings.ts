import { CharacterSize } from './character-size.enum';
import { VehicleType } from './vehicle-type.enum';

export interface KartSettings {
    allowedCharacters: CharacterSize;
    allowedVehicles: VehicleType;
    allowDuplicates: boolean;
}
