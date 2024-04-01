import { Component } from '@angular/core';
import { LLMfundamentalsComponent } from './../llmfundamentals/llmfundamentals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LLMfundamentalsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
