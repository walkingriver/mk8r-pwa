import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwUpdate } from '@angular/service-worker';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { of } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let platformReadySpy: Promise<void>;
  let platformSpy: jasmine.SpyObj<Platform>;
  let swUpdateSpy: jasmine.SpyObj<SwUpdate>;

  beforeEach(waitForAsync(() => {
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    swUpdateSpy = jasmine.createSpyObj('SwUpdate', ['checkForUpdate'], {
      isEnabled: false,
      versionUpdates: of()
    });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Platform, useValue: platformSpy },
        { provide: SwUpdate, useValue: swUpdateSpy },
        { provide: AlertController, useValue: jasmine.createSpyObj('AlertController', ['create']) },
        { provide: ToastController, useValue: jasmine.createSpyObj('ToastController', ['create']) }
      ],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should initialize the platform', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
  });

  it('should render primary menu labels', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent ?? '';

    expect(text).toContain('Home');
    expect(text).toContain('Randomizer');
    expect(text).toContain('Settings');
    expect(text).toContain('Check for Updates');
  });
});
