import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment as env } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/general/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TicketComponent } from './components/tickets/ticket/ticket.component';
import { FeedComponent } from './components/general/feed/feed.component';
import { RestComponent } from './components/rests/rest/rest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TicketComponent,
    FeedComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(env.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
