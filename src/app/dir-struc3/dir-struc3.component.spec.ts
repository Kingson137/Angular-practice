import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStruc3Component } from './dir-struc3.component';

describe('DirStruc3Component', () => {
  let component: DirStruc3Component;
  let fixture: ComponentFixture<DirStruc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirStruc3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirStruc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
