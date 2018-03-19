import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatGridListModule, MatIconModule, MatSidenavModule, MatExpansionModule } from '@angular/material';
import { DataService } from './shared/data.service';
import { StandingsComponent } from './standings/standings.component';
import { StandingsTileComponent } from './standings/standings-tile/standings-tile.component';
import { GamesComponent } from './games/games.component';
import { StatsComponent } from './stats/stats.component';
import { ScoresComponent } from './scores/scores.component';
import { ScoresTileComponent } from './scores/scores-tile/scores-tile.component';
import { StatsTileComponent } from './stats/stats-tile/stats-tile.component';
import { GamesTileComponent } from './games/games-tile/games-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    StandingsComponent,
    StandingsTileComponent,
    GamesComponent,
    StatsComponent,
    ScoresComponent,
    ScoresTileComponent,
    StatsTileComponent,
    GamesTileComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
