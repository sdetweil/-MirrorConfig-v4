import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatasourceModalPage } from './datasource-modal.page';

describe('DatasourceModalPage', () => {
  let component: DatasourceModalPage;
  let fixture: ComponentFixture<DatasourceModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasourceModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatasourceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
