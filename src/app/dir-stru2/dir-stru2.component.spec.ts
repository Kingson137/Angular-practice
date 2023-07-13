import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStru2Component } from './dir-stru2.component';

describe('DirStru2Component', () => {
  let component: DirStru2Component;
  let fixture: ComponentFixture<DirStru2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirStru2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirStru2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
