import { Injectable } from '@angular/core';
import { PartnersMock } from '../../mocks/partners';
import { Observable } from 'rxjs';
import { PartnerInterFace } from '../../interfaces/partner.interface';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor() { }
  public getPartners(): Observable<PartnerInterFace[]> {
    return Observable.create(observer => observer.next(PartnersMock));
  }
}
