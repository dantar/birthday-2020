import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GameplayComponent } from './components/gameplay/gameplay.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FullscreenToggleComponent } from './components/fullscreen-toggle/fullscreen-toggle.component';
import { TimedScoreComponent } from './components/timed-score/timed-score.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { RegisterScoreComponent } from './components/register-score/register-score.component';
import { ClassificaComponent } from './components/classifica/classifica.component';

@NgModule({
  declarations: [
    AppComponent,
    GameplayComponent,
    ThemeToggleComponent,
    FullscreenToggleComponent,
    TimedScoreComponent,
    ThanksComponent,
    RegisterScoreComponent,
    ClassificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
