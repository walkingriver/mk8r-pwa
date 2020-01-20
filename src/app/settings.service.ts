import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { KartSettings } from './kart-settings';
import { CharacterSize } from './character-size.enum';
import { VehicleType } from './vehicle-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public static defaultSettings: KartSettings = {
    allowedCharacters: CharacterSize.Small | CharacterSize.Medium | CharacterSize.Large | CharacterSize.Mii,
    allowedVehicles: VehicleType.Kart | VehicleType.Bike | VehicleType.ATV,
    allowDuplicates: true
  };

  private settingsCache: KartSettings;

  constructor(private storage: Storage) { }

  saveSettings(settings: KartSettings): Promise<void> {
    this.settingsCache = Object.assign({}, settings);
    return this.storage.set('kart-settings', settings);
  }

  async loadSettings(): Promise<KartSettings> {
    if (!this.settingsCache) {
      const storedSettings = await this.storage.get('kart-settings');
      this.settingsCache = Object.assign({}, SettingsService.defaultSettings, storedSettings);
    }

    return this.settingsCache;
  }
}
