import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoStatsComponent } from './to-do-stats.component';

describe('ToDoStatsComponent', () => {
  let component: ToDoStatsComponent;
  let fixture: ComponentFixture<ToDoStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
