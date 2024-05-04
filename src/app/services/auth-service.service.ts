import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.get<any>('./db.json').subscribe(data => {
        const users = data.users;
        const foundUser = users.find((user: { username: string; password: string; }) => user.username === username && user.password === password);
        observer.next(!!foundUser);
        observer.complete();
      }, error => {
        console.error('Failed to load users from JSON:', error);
        observer.error('Failed to load users');
      });
    });
  }
}
