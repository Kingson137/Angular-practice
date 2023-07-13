import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZTemplateDrivenFormComponent } from './z-template-driven-form.component';

describe('ZTemplateDrivenFormComponent', () => {
  let component: ZTemplateDrivenFormComponent;
  let fixture: ComponentFixture<ZTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZTemplateDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
