import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModuleComponent } from './http-module.component';

describe('HttpModuleComponent', () => {
  let component: HttpModuleComponent;
  let fixture: ComponentFixture<HttpModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
