import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MarioService } from '../mario.service';
import { SettingsService } from '../settings.service';
import { SlotsPageModule } from './slots.module';
import { SlotsPage } from './slots.page';

describe('SlotsPage', () => {
  let component: SlotsPage;
  let fixture: ComponentFixture<SlotsPage>;

  beforeEach(waitForAsync(() => {
    const marioService = jasmine.createSpyObj<MarioService>('MarioService', [
      'getAllCharacters',
      'getAllVehicles',
      'getAllWheels',
      'getAllGliders'
    ]);
    marioService.getAllCharacters.and.returnValue([]);
    marioService.getAllVehicles.and.returnValue([]);
    marioService.getAllWheels.and.returnValue([]);
    marioService.getAllGliders.and.returnValue([]);

    const settingsService = jasmine.createSpyObj<SettingsService>('SettingsService', ['loadSettings']);
    settingsService.loadSettings.and.returnValue(Promise.resolve(SettingsService.defaultSettings));

    TestBed.configureTestingModule({
      imports: [SlotsPageModule],
      providers: [
        { provide: MarioService, useValue: marioService },
        { provide: SettingsService, useValue: settingsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotsPage);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
