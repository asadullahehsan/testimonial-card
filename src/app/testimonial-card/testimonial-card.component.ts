import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css'
})
export class TestimonialCardComponent {
  @Input() avatarSrc: string = "/assets/profile-thumbnail.png";
  @Input() name: string = "Sarah Dole";
  @Input() username: string = "sarahdole";
  @Input() testimonial: string = "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!";
}