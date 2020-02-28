import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { createOvermind } from 'overmind'
import { OvermindModule, OvermindService, OVERMIND_INSTANCE } from 'overmind-angular'
import { config, Store } from '../overmind'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { TopicsComponent } from './topics/topics.component'
import { TopicComponent } from './topic/topic.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, TopicsComponent, TopicComponent],
  imports: [BrowserModule, AppRoutingModule, OvermindModule],
  providers: [
    { provide: OVERMIND_INSTANCE, useFactory: () => createOvermind(config) },
    { provide: Store, useExisting: OvermindService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
