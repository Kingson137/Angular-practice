import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZReactiveFormComponent } from './z-reactive-form.component';

describe('ZReactiveFormComponent', () => {
  let component: ZReactiveFormComponent;
  let fixture: ComponentFixture<ZReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
