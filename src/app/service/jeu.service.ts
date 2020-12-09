import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Jeu} from '../jeu';

@Injectable({
  providedIn: 'root'
})
export class JeuService {

  private jeuUrl: string;

  constructor(private http: HttpClient) {
    this.jeuUrl = 'http://localhost:8080/Jeux';
  }

  public findAll(): Observable<Jeu[]> {
    return this.http.get<Jeu[]>(this.jeuUrl);
  }
}
