import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1CompComponent } from './mod1-comp.component';

describe('Mod1CompComponent', () => {
  let component: Mod1CompComponent;
  let fixture: ComponentFixture<Mod1CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mod1CompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
