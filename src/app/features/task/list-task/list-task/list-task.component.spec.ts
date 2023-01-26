import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListTaskComponent } from './list-task.component';

describe('ListTaskComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaskComponent ],
      imports: [ 
        RouterTestingModule
       ]

    })
    .compileComponents();

  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ListTaskComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
