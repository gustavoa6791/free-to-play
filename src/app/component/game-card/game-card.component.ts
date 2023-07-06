import { Component, Input } from '@angular/core';
import { GameModel } from 'src/app/interfaces/GameModel';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() game?: GameModel;
}
