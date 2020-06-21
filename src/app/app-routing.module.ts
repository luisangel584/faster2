import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/general/home/home.component';
import { TicketComponent } from './components/tickets/ticket/ticket.component';
import { FeedComponent } from './components/general/feed/feed.component';
import { RestComponent } from './components/rests/rest/rest.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'ticket/:ticket',
    component: TicketComponent
  },
  {
    path: 'rest/:rest',
    component: RestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
