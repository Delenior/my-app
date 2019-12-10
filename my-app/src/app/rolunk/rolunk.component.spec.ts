import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolunkComponent } from './rolunk.component';

describe('RolunkComponent', () => {
  let component: RolunkComponent;
  let fixture: ComponentFixture<RolunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
