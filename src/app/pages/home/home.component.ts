import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameModel } from 'src/app/interfaces/GameModel';
import { GamesServices } from 'src/app/services/games.service';
import { map} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public games?: GameModel[]
  public genreList?: string[]
  public plataformList?: string[]
  public filters =  {
    title : "",
    genre : "...",
    platform : "...",
  }

  constructor(
    private http: HttpClient,
    private gamesServices: GamesServices
  ) {}

  ngOnInit(){
    this.fetchData()
  }

  async fetchData(){
    await this.gamesServices.getGames()
    .pipe(
      map(data => {
        let datafiltered: GameModel[] 
          datafiltered = (this.filters.title && this.filters.title.trim() !== "")
          ? data.filter(game => game.title.toLowerCase().includes(this.filters.title.toLowerCase()))
          : data
          datafiltered = (this.filters.genre && this.filters.genre.trim() !== "...")
          ? datafiltered.filter(game => game.genre.toLowerCase().includes(this.filters.genre.toLowerCase()))
          : datafiltered
          datafiltered = (this.filters.platform && this.filters.platform.trim() !== "...")
          ? datafiltered.filter(game => game.platform.toLowerCase().includes(this.filters.platform.toLowerCase()))
          : datafiltered
 
          const uniqueGenres: string[] = [];
          data.forEach(game => {
            if (!uniqueGenres.includes(game.genre.trim())) uniqueGenres.push(game.genre.trim());
          });
          const uniquePlataform: string[] = [];
          data.forEach(game => {
            if (!uniquePlataform.includes(game.platform.trim())) uniquePlataform.push(game.platform.trim());
          });
        return { datafiltered, uniqueGenres,uniquePlataform};
      }),
    
    )
    .subscribe(({ datafiltered, uniqueGenres, uniquePlataform }) => {
      this.games = datafiltered 
      this.genreList = uniqueGenres.sort() 
      this.plataformList = uniquePlataform.sort() 
    })
  }


  onFilters(){
    this.fetchData()
  }
}
