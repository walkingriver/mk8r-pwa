import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  beforeEach(() => {
    const storageSpy = jasmine.createSpyObj<Storage>('Storage', ['create', 'get', 'set']);
    storageSpy.create.and.returnValue(Promise.resolve(storageSpy));
    storageSpy.get.and.returnValue(Promise.resolve(null));
    storageSpy.set.and.returnValue(Promise.resolve());

    TestBed.configureTestingModule({
      providers: [
        SettingsService,
        { provide: Storage, useValue: storageSpy }
      ]
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(SettingsService);
    expect(service).toBeTruthy();
  });
});
