import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotsPage } from './slots.page';

describe('SlotsPage', () => {
  let component: SlotsPage;
  let fixture: ComponentFixture<SlotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
