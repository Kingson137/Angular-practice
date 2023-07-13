import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStruc1Component } from './dir-struc1.component';

describe('DirStruc1Component', () => {
  let component: DirStruc1Component;
  let fixture: ComponentFixture<DirStruc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirStruc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirStruc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
