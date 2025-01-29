import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { SpecialityComponent } from "../speciality/speciality.component";
import { PopularComponent } from "../popular/popular.component";
import { FooterComponent } from "../footer/footer.component";
import { StyleService } from '../../services/style.service';
import { ButtonComponent } from "../../buttons/button/button.component";
import { PopularCardComponent } from "../../components/popular-card/popular-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, SpecialityComponent, PopularComponent, FooterComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  backgroundColor:string = 'white';
  textColor:string = 'black';

  constructor(private styleService: StyleService){}

  ngOnInit() {
      this.styleService.backgroundColor$.subscribe((color => {
        this.backgroundColor = color;
      }));

      this.styleService.textColor$.subscribe((color =>{
        this.textColor = color;
      }))
  }


}
