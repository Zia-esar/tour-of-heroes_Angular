import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroes } from './mock-heroes';
import { Hero } from './hero';
import {MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private msgService: MessageService) { }

    getHeroes():Observable<Hero[]>{
    this.msgService.add('HeroService: fetched heroes')
    return of(Heroes);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.msgService.add(`HeroService: fetched hero id=${id}`);
    return of(Heroes.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.msgService.add(`HeroService: ${message}`);
  }
}
