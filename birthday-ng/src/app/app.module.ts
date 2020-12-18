import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GameplayComponent } from './components/gameplay/gameplay.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FullscreenToggleComponent } from './components/fullscreen-toggle/fullscreen-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    GameplayComponent,
    ThemeToggleComponent,
    FullscreenToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
