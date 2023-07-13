import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLoginTempComponent } from './task-login-temp.component';

describe('TaskLoginTempComponent', () => {
  let component: TaskLoginTempComponent;
  let fixture: ComponentFixture<TaskLoginTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskLoginTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLoginTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
