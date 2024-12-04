import { Component } from '@angular/core';
import { StyleService } from '../../services/style.service';
import { Etheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {

  public icon: string = 'https://www.svgrepo.com/show/532875/moon.svg';

  private isDarkTheme = false;

  toggleTheme() {
    const body = document.body;

    if (this.isDarkTheme) {
        console.log('Removendo dark-theme');
        this.icon = 'https://www.svgrepo.com/show/532875/moon.svg';
        body.classList.remove('dark-theme');
    } else {
      this.icon = 'https://www.svgrepo.com/show/532889/sun.svg';
        console.log('Adicionando dark-theme');
        body.classList.add('dark-theme');
    }

    this.isDarkTheme = !this.isDarkTheme;
}

}
