import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private backgroundColorSource = new BehaviorSubject<string>('white');
  private textColorSource = new BehaviorSubject<string>('black');

  backgroundColor$ = this.backgroundColorSource.asObservable();
  textColor$ = this.textColorSource.asObservable();

  changeStyles(backgroundColor: string, textColor: string) {

    this.backgroundColorSource.next(backgroundColor);
    this.textColorSource.next(textColor); 

  }
}
