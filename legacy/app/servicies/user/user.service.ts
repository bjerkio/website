import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersMock } from '../../mocks/users.mock';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(id: number): Observable<UserInterface> {
    return  Observable.create( observer => {
      observer.next(UsersMock.find( user => user.id === id));
    });
  }

  public getUsers(): Observable<UserInterface[]> {
    return Observable.create(observer => {
      observer.next(UsersMock);
    });
  }
}


