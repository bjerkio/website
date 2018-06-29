import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ContentMarketingInterface } from '../../interfaces/content-marketing.interface';
import { ContentMarketingItems } from '../../mocks/content-marketing.mock';

@Injectable({
  providedIn: 'root'
})
export class ContentMarcetingService {

  constructor() { }
  public getItems(): Observable<ContentMarketingInterface[]> {
    return Observable.create( observer => {
      observer.next(ContentMarketingItems);
    });
  }
}
