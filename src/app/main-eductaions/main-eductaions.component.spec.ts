import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEductaionsComponent } from './main-eductaions.component';

describe('MainEductaionsComponent', () => {
  let component: MainEductaionsComponent;
  let fixture: ComponentFixture<MainEductaionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEductaionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainEductaionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
