import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsertTaskComponent } from './insert-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('InsertTaskComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTaskComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();


  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InsertTaskComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
