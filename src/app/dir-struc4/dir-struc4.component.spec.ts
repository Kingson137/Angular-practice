import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStruc4Component } from './dir-struc4.component';

describe('DirStruc4Component', () => {
  let component: DirStruc4Component;
  let fixture: ComponentFixture<DirStruc4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirStruc4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirStruc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
