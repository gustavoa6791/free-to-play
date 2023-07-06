import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameModel } from '../interfaces/GameModel';
import { GameDetailModel } from '../interfaces/GameDetailModel';
import { environment } from 'src/environments/environments';

@Injectable({providedIn: 'root'})

export class GamesServices {

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<GameModel[]>([environment.apiFakeCors, environment.apiBaseUrl,"games"].join("/"))
  }

  getGameById(gameId?: string) {
    return this.http.get<GameDetailModel>([environment.apiFakeCors,environment.apiBaseUrl,`game?id=${gameId}`].join("/"))
  }
}
