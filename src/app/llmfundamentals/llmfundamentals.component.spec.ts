import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLMfundamentalsComponent } from './llmfundamentals.component';

describe('LLMfundamentalsComponent', () => {
  let component: LLMfundamentalsComponent;
  let fixture: ComponentFixture<LLMfundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LLMfundamentalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LLMfundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
