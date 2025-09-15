import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToDoComponent } from './new-to-do.component';

describe('NewToDoComponent', () => {
  let component: NewToDoComponent;
  let fixture: ComponentFixture<NewToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewToDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
