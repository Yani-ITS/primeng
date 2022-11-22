import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
providedIn: "root"
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any>{
    return this.http.get('https://localhost:3000/api/usuarios');
  }

  getUser(id: any): Observable<any>{
    return this.http.get(`https://localhost:3000/api/usuarios/:id`, id)
  }

  createUser(user: any): Observable<any>{
    return this.http.post('https://localhost:3000/api/usuarios', user);
  }

  editUser(id: any): Observable<any>{
    return this.http.put('https://localhost:3000/api/usuarios/:id', id);
  }

  deleteUser(id: any): Observable<any>{
    return this.http.delete(`https://localhost:3000/api/usuarios/:id`, id)
  }
}
