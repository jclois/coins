import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtGoldApiComponent } from './ext-gold-api.component';

describe('ExtGoldApiComponent', () => {
  let component: ExtGoldApiComponent;
  let fixture: ComponentFixture<ExtGoldApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtGoldApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtGoldApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
