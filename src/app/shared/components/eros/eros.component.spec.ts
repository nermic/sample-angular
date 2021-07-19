import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErosComponent } from './eros.component';

describe('ErosComponent', () => {
  let component: ErosComponent;
  let fixture: ComponentFixture<ErosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
