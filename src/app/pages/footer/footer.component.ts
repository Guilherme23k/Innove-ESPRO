import { Component } from '@angular/core';
import { PopularCardComponent } from "../../components/popular-card/popular-card.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PopularCardComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
