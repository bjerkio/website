import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { homePageLinks } from '../../mocks/home-links.mock';
import { CardLinkInterface } from '../../interfaces/card-link.interface';

@Injectable({
  providedIn: 'root'
})
export class CardLinkService {

  constructor() { }
  public getItems(): Observable<CardLinkInterface[]> {
    return Observable.create( observer => {
      observer.next(homePageLinks);
    });
  }
}
