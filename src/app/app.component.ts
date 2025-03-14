import { Component } from '@angular/core';
import { TestimonialCardComponent } from "./testimonial-card/testimonial-card.component";

@Component({
  selector: 'app-root',
  imports: [TestimonialCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testimonial-card';
}
