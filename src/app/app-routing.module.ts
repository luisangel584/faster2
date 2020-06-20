import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/general/home/home.component';
import { TicketComponent } from './components/tickets/ticket/ticket.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ticket/:ticket',
    component: TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
