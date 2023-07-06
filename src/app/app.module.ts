import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameCardComponent } from './component/game-card/game-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environments';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameCardComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: 'API_BASE_URL', useValue: environment.apiBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
