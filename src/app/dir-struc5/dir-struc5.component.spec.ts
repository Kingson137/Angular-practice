import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStruc5Component } from './dir-struc5.component';

describe('DirStruc5Component', () => {
  let component: DirStruc5Component;
  let fixture: ComponentFixture<DirStruc5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirStruc5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirStruc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
