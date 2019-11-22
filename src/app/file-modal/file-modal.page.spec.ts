import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FileModalPage } from './file-modal.page';

describe('FileModalPage', () => {
  let component: FileModalPage;
  let fixture: ComponentFixture<FileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
