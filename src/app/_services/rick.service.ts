import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class RickService {
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(API_URL + 'rickandmorty');
  }

  findByName(name: string): Observable<any> {
    return this.http.get(API_URL + 'rickandmorty', { params: { name: name } });
  }

}
