import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskquestionsComponent } from './askquestions.component';

describe('AskquestionsComponent', () => {
  let component: AskquestionsComponent;
  let fixture: ComponentFixture<AskquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskquestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
