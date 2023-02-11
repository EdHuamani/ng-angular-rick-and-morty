import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/character/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  getMyCharacters(uid: string): Observable<any> {
    return this.http.get(API_URL + uid);
  }

  saveCharacter(uid: string, ref: number, name: string, image: string, comment: string, score: number): Observable<any> {
    return this.http.post(
      API_URL,
      {
        uid,
        ref,
        name,
        image,
        comment,
        score
      },
      httpOptions
    );
  }

  findByName(uid: string, name: string): Observable<any> {
    return this.http.get(API_URL + uid, { params: { name: name } });
  }

}
