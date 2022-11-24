import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable , throwError} from "rxjs";

import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class UsersService {


  constructor(private http: HttpClient) {}

  getUsers(): Observable<any>{
    return this.http.get('/api/usuarios');
  }

  getUser(id: any): Observable<any>{
    return this.http.get('/api/usuarios/:id', id)
  }

  createUser(user: any): Observable<any>{
    return this.http.post('/api/usuarios', user);
  }

  editUser(id: any): Observable<any>{
    return this.http.put('/api/usuarios/:id', id);
  }

  deleteUser(id: any): Observable<any>{
    return this.http.delete('/api/usuarios/:id', id)
  }
}
