import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SettingsService } from '../settings.service';
import { SettingsPageModule } from './settings.module';
import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(waitForAsync(() => {
    const settingsService = jasmine.createSpyObj<SettingsService>('SettingsService', ['loadSettings', 'saveSettings']);
    settingsService.loadSettings.and.returnValue(Promise.resolve(SettingsService.defaultSettings));

    TestBed.configureTestingModule({
      imports: [SettingsPageModule],
      providers: [{ provide: SettingsService, useValue: settingsService }]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
