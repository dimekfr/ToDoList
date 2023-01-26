import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditTaskComponent } from './edit-task.component';
import { FormsModule } from '@angular/forms';


describe('EditTaskComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTaskComponent],
      imports: [ RouterTestingModule, FormsModule]
      
    })
    .compileComponents();
  
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EditTaskComponent);
    const component = fixture.debugElement.componentInstance;
   // fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
