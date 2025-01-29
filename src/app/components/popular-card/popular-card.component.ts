import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { PopularComponent } from '../../pages/popular/popular.component';

@Component({
  selector: 'app-popular-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-card.component.html',
  styleUrl: './popular-card.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopularCardComponent {

  @Input() imageUrl!: string;
  @Input() title: string = '';
  @Input() priceIndex: number = 0;
  @Input() repeatCount: number = 4

  stars = '/assets/star.svg';
  emptyStar = '/assets/star-vazada.svg';

  priceLabels: string[] = ['Já aconteceu', 'Vai acontecer'];

  get priceLabel(): string {
    return this.priceLabels[this.priceIndex] || 'indefinido';
  }

}
