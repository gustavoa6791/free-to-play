import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { GameDetailModel } from 'src/app/interfaces/GameDetailModel';
import { GamesServices } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent {

  public gameId?: string;
  public currentGame?: GameDetailModel;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private gamesServices: GamesServices
  ) {}

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('id') ?? "0" ;
    this.fetchData()
  }

  async fetchData(){
    await this.gamesServices.getGameById(this.gameId)
    .subscribe(data => {
     this.currentGame = data
    })
  }
}
