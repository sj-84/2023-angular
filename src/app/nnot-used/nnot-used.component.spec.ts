import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NNotUsedComponent } from './nnot-used.component';

describe('NNotUsedComponent', () => {
  let component: NNotUsedComponent;
  let fixture: ComponentFixture<NNotUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NNotUsedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NNotUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
