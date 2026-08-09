import { Injectable } from '@angular/core';
import { MkItem } from './mk-item';
import { Character } from './character';
import { CharacterSize } from './character-size.enum';
import { VehicleType } from './vehicle-type.enum';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class MarioService {
  private static characters: Character[] = [
    { size: CharacterSize.Small, name: 'Toad', image: '32px-MK8_Toad_Icon.png' },
    { size: CharacterSize.Small, name: 'Koopa', image: '32px-MK8_Koopa_Icon.png' },
    { size: CharacterSize.Small, name: 'ShyGuy', image: '32px-MK8_ShyGuy_Icon.png' },
    { size: CharacterSize.Small, name: 'Lakitu', image: '32px-MK8_Lakitu_Icon.png' },
    { size: CharacterSize.Small, name: 'Toadette', image: '32px-MK8_Toadette_Icon.png' },
    { size: CharacterSize.Small, name: 'Baby Mario', image: '32px-MK8_BabyMario_Icon.png' },
    { size: CharacterSize.Small, name: 'Baby Luigi', image: '32px-MK8_BabyLuigi_Icon.png' },
    { size: CharacterSize.Small, name: 'Baby Peach', image: '32px-MK8_BabyPeach_Icon.png' },
    { size: CharacterSize.Small, name: 'Baby Daisy', image: '32px-MK8_BabyDaisy_Icon.png' },
    { size: CharacterSize.Small, name: 'Baby Rosalina', image: '32px-MK8_BabyRosalina_Icon.png' },
    { size: CharacterSize.Small, name: 'Lemmy', image: '32px-MK8_Lemmy_Icon.png' },
    { size: CharacterSize.Small, name: 'Larry', image: '32px-MK8_Larry_Icon.png' },
    { size: CharacterSize.Small, name: 'Wendy', image: '32px-MK8_Wendy_Icon.png' },
    { size: CharacterSize.Small, name: 'Isabelle', image: '32px-MK8_Isabelle_Icon.png' },
    { size: CharacterSize.Small | CharacterSize.Mii, name: 'Mii (Small)', image: '32px-Mii_MK8.png' },
    { size: CharacterSize.Medium, name: 'Mario', image: '32px-MK8_Mario_Icon.png' },
    { size: CharacterSize.Medium, name: 'Luigi', image: '32px-MK8_Luigi_Icon.png' },
    { size: CharacterSize.Medium, name: 'Peach', image: '32px-MK8_Peach_Icon.png' },
    { size: CharacterSize.Medium, name: 'Daisy', image: '32px-MK8_Daisy_Icon.png' },
    { size: CharacterSize.Medium, name: 'Metal Mario', image: '32px-MK8_MMario_Icon.png' },
    { size: CharacterSize.Medium, name: 'Yoshi', image: '32px-MK8_Yoshi_Icon.png' },
    { size: CharacterSize.Medium, name: 'Pink Gold Peach', image: '32px-MK8_PGPeach_Icon.png' },
    { size: CharacterSize.Medium, name: 'Iggy', image: '32px-MK8_Iggy_Icon.png' },
    { size: CharacterSize.Medium, name: 'Ludwig', image: '32px-MK8_Ludwig_Icon.png' },
    { size: CharacterSize.Medium, name: 'Tanooki Mario', image: '32px-MK8_Tanooki_Mario_Icon.png' },
    { size: CharacterSize.Medium, name: 'Cat Peach', image: '32px-MK8_Cat_Peach_Icon.png' },
    { size: CharacterSize.Medium, name: 'Villager', image: '50px-MK8_Villager_Icon.png' },
    { size: CharacterSize.Medium | CharacterSize.Mii, name: 'Mii (Medium)', image: '32px-Mii_MK8.png' },
    { size: CharacterSize.Medium, name: 'Birdo', image: '32px-MK8_Mario_Icon.png'}, //Add image
    { size: CharacterSize.Medium, name: 'Kamek', image: '32px-MK8_Mario_Icon.png'}, //Add image
    { size: CharacterSize.Medium, name: 'Diddy Kong', image: '32px-MK8_Mario_Icon.png'}, //Add image
    { size: CharacterSize.Medium, name: 'Peachette', image: '32px-MK8_Mario_Icon.png'}, //Add image
    { size: CharacterSize.Large, name: 'Rosalina', image: '32px-MK8_Rosalina_Icon.png' },
    { size: CharacterSize.Large, name: 'Bowser', image: '32px-MK8_Bowser_Icon.png' },
    { size: CharacterSize.Large, name: 'Donkey Kong', image: '32px-MK8_DKong_Icon.png' },
    { size: CharacterSize.Large, name: 'Wario', image: '32px-MK8_Wario_Icon.png' },
    { size: CharacterSize.Large, name: 'Waluigi', image: '32px-MK8_Waluigi_Icon.png' },
    { size: CharacterSize.Large, name: 'Roy', image: '32px-MK8_Roy_Icon.png' },
    { size: CharacterSize.Large, name: 'Morton', image: '32px-MK8_Morton_Icon.png' },
    { size: CharacterSize.Large, name: 'Link', image: '32px-MK8_Link_Icon.png' },
    { size: CharacterSize.Large, name: 'Dry Bowser', image: '32px-MK8_Dry_Bowser_Icon.png' },
    { size: CharacterSize.Large | CharacterSize.Mii, name: 'Mii (Large)', image: '32px-Mii_MK8.png' },
    { size: CharacterSize.Large, name: 'Petey Piranha', image: '32px-MK8_Mario_Icon.png'}, //Add image
    { size: CharacterSize.Large, name: 'Wiggler', image: '32px-MK8_Mario_Icon.png'}, //Add image
    { size: CharacterSize.Large, name: 'Funky Kong', image: '32px-MK8_Mario_Icon.png'}, //Add image
    { size: CharacterSize.Large, name: 'Pauline', image: '32px-MK8_Mario_Icon.png'}, //Add image
  ];

  private static vehicles: Vehicle[] = [
    { type: VehicleType.Kart, name: 'Standard Kart', image: '100px-StandardKartBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Pipe Frame', image: '100px-PipeFrameBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Mach 8', image: '100px-Mach8BodyMK8.png' },
    { type: VehicleType.Kart, name: 'Steel Driver', image: '100px-Steel_Driver.png' },
    { type: VehicleType.Kart, name: 'Cat Cruiser', image: '100px-CatCruiserBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Circuit Special', image: '100px-CircuitSpecialBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Tri-Speeder', image: '100px-TrispeederBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Badwagon', image: '100px-BadwagonBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Prancer', image: '100px-PrancerBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Biddybuggy', image: '100px-BiddybuggyBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Landship', image: '100px-LandshipBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Sneeker', image: '100px-SneakerBodyMK8.png' },
    { type: VehicleType.Kart, name: 'Sports Coupe', image: '100px-SportsCoupeMK8.png' },
    { type: VehicleType.Kart, name: 'Gold Standard', image: '100px-Gold_Standard.png' },
    { type: VehicleType.Kart, name: 'GLA ', image: '100px-GLA-MK8.png' },
    { type: VehicleType.Kart, name: 'Silver Arrow ', image: '100px-W25SilverArrow-MK8.png' },
    { type: VehicleType.Kart, name: '300 SL Roadster', image: '100px-300SLRoadster-MK8.png' },
    { type: VehicleType.Kart, name: 'Blue Falcon', image: '100px-MK8BlueFalcon.png' },
    { type: VehicleType.Kart, name: 'Tanooki Kart', image: '100px-Tanooki-Buggy.png' },
    { type: VehicleType.Kart, name: 'B Dasher', image: '100px-ZeldaMK8Bdasher.png' },
    { type: VehicleType.Kart, name: 'Streetle', image: '100px-MK8Streetle.png' },
    { type: VehicleType.Kart, name: 'P-Wing', image: '100px-MK8PWing.png' },
    { type: VehicleType.Bike, name: 'Standard Bike', image: '100px-StandardBikeBodyMK8.png' },
    { type: VehicleType.Bike, name: 'Comet', image: '100px-CometBodyMK8.png' },
    { type: VehicleType.Bike, name: 'Sport Bike', image: '100px-SportBikeBodyMK8.png' },
    { type: VehicleType.Bike, name: 'The Duke', image: '100px-TheDukeBodyMK8.png' },
    { type: VehicleType.Bike, name: 'Flame Rider', image: '100px-FlameRiderBodyMK8.png' },
    { type: VehicleType.Bike, name: 'Varmint', image: '100px-VarmintBodyMK8.png' },
    { type: VehicleType.Bike, name: 'Mr. Scooty', image: '100px-MrScootyBodyMK8.png' },
    { type: VehicleType.Bike, name: 'Jet Bike', image: '100px-JetBikeBodyMK8.png' },
    { type: VehicleType.Bike, name: 'Yoshi Bike', image: '100px-YoshiBikeBodyMK8.png' },
    { type: VehicleType.Bike, name: 'Master Cycle', image: '100px-MK8MasterCycle.png' },
    { type: VehicleType.Bike, name: 'City Tripper', image: '100px-MK8CityTripper.png' },
    { type: VehicleType.ATV, name: 'Standard ATV', image: '100px-StandardATVBodyMK8.png' },
    { type: VehicleType.ATV, name: 'Wild Wiggler', image: '100px-WildWigglerBodyMK8.png' },
    { type: VehicleType.ATV, name: 'Teddy Buggy', image: '100px-TeddyBuggyBodyMK8.png' },
    { type: VehicleType.ATV, name: 'Bone Rattler', image: '100px-MK8BoneRattler.png' }
  ];

  private static wheels: MkItem[] = [
    { name: 'Standard', image: '100px-StandardTiresMK8.png' },
    { name: 'Monster', image: '100px-MonsterTiresMK8.png' },
    { name: 'Roller', image: '100px-RollerTiresMK8.png' },
    { name: 'Slim', image: '100px-SlimTiresMK8.png' },
    { name: 'Slick', image: '100px-SlickTiresMK8.png' },
    { name: 'Metal', image: '100px-MetalTiresMK8.png' },
    { name: 'Button', image: '100px-ButtonTiresMK8.png' },
    { name: 'Off-Road', image: '100px-Off-Road.png' },
    { name: 'Sponge', image: '100px-SpongeTiresMK8.png' },
    { name: 'Wooden', image: '100px-WoodTiresMK8.png' },
    { name: 'Cushion', image: '100px-CushionTiresMK8.png' },
    { name: 'Blue Standard', image: '100px-Blue_Standard.png' },
    { name: 'Hot Monster', image: '100px-HotMonsterTiresMK8.png' },
    { name: 'Azure Roller', image: '100px-AzureRollerTiresMK8.png' },
    { name: 'Crimson Slim', image: '100px-CrimsonSlimTiresMK8.png' },
    { name: 'Cyber Slick', image: '100px-CyberSlickTiresMK8.png' },
    { name: 'Retro Off-Road', image: '100px-Retro_Off-Road.png' },
    { name: 'Gold Standard', image: '100px-Gold_Tires_MK8.png' },
    { name: 'GLA Tires', image: '100px-GLATires-MK8.png' },
    { name: 'Triforce Tires', image: 'MK8-TriforceTires.png' },
    { name: 'Leaf Tires', image: '100px-Leaf_Tires_MK8.png' }
  ];

  private static gliders: MkItem[] = [
    { name: 'Super Glider', image: 'SuperGliderMK8.png' },
    { name: 'Cloud Glider', image: 'Cloud_Glider.png'},
    { name: 'Wario Wing', image: 'WarioWingMK8.png'},
    { name: 'Waddle Wing', image: 'WaddleWingMK8.png'},
    { name: 'Peach Parasol', image: 'PeachParasolGliderMK8.png'},
    { name: 'Parachute', image: 'ParachuteGliderMK8.png'},
    { name: 'Parafoil', image: 'ParafoilGliderMK8.png'},
    { name: 'Flower Glider', image: 'FlowerGliderMK8.png'},
    { name: 'Bowser Kite', image: 'BowserKiteMK8.png'},
    { name: 'Plane Glider', image: 'PlaneGliderMK8.png'},
    { name: 'MKTV Parafoil', image: 'MKTVParafoilGliderMK8.png'},
    { name: 'Gold Glider', image: 'GoldGliderMK8.png'},
    { name: 'Hylian Kite', image: 'MK8-HylianKite.png'},
    { name: 'Paper Glider', image: 'PaperGliderIconMK8.png'}
  ];

  constructor() { }

  getAllCharacters(): Character[] {
    return MarioService.characters;
  }

  getAllVehicles(): Vehicle[] {
    return MarioService.vehicles;
  }

  getAllWheels(): MkItem[] {
    return MarioService.wheels;
  }

  getAllGliders(): MkItem[] {
    return MarioService.gliders;
  }
}
