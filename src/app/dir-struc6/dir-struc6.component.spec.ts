import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStruc6Component } from './dir-struc6.component';

describe('DirStruc6Component', () => {
  let component: DirStruc6Component;
  let fixture: ComponentFixture<DirStruc6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirStruc6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirStruc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
