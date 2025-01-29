import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { PopularCardComponent } from "../../components/popular-card/popular-card.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [PopularCardComponent, CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularComponent implements AfterViewInit{
  cards= [
    {
      imageUrl: "https://innoveeventos.netlify.app/img/Moeda.jpg",
      title: 'Museu da Moeda',
      priceIndex: 0,
      starsCount:4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/cine-espro.jpg",
      title: 'Cine ESPRO',
      priceIndex: 0,
      starsCount:4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/doacao.jpg",
      title: 'Doação para o RS',
      priceIndex: 0,
      starsCount:4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/maio-laranja.jpg",
      title: 'Maio laranja',
      priceIndex: 0,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/junina.jpg",
      title: 'Festa Junina',
      priceIndex: 0,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/Museu%20da%20Lingua%20Portuguesa.jpg",
      title: 'Museu da língua Portuguesa',
      priceIndex: 0,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/mes.png",
      title: 'Aniversariantes',
      priceIndex: 1,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/ipiranga.webp",
      title: 'Museu do ipiranga',
      priceIndex: 1,
      starsCount: 4,
    },
    {
      imageUrl: "https://innoveeventos.netlify.app/img/holocaustro.jpg",
      title: 'Museu do Holocausto',
      priceIndex: 1,
      starsCount: 4,
    }
    
  ]

  public swiperConfig = {
  slidesPerView: 3, // Exibe 3 cards por vez
  spaceBetween: 10, // Espaço entre os cards
  navigation: false, // Botões de navegação (próximo/anterior)
  pagination: { clickable: true }, // Paginação (bolinhas indicadoras)
  autoplay: {
    delay: 3000, // Rola automaticamente a cada 3 segundos
    disableOnInteraction: false, // Continua rolando após interação do usuário
  },
  loop: true, // Habilita o loop infinito
  breakpoints: {
    640: {
      slidesPerView: 2, // Em telas menores, exibe 2 cards por vez
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3, // Em telas médias, exibe 3 cards por vez
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4, // Em telas grandes, exibe 4 cards por vez
      spaceBetween: 40,
    },
  }
};

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      
      const swiperEl = document.querySelector('swiper-container');
      if (swiperEl) {
        Object.assign(swiperEl, this.swiperConfig);
        swiperEl.initialize(); 
      }
    }

  }
}
