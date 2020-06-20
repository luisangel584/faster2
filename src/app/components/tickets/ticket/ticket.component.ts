import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from 'src/app/services/tickets/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticketActual: string;
  ticketDetalle: any = {};

  constructor(
    public activatedRouter: ActivatedRoute,
    public ticketsService: TicketsService
  ) { }

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.activatedRouter.params.subscribe((param: any) => {
      this.ticketActual = param.ticket;
      console.log(this.ticketActual);
      this.ticketsService.getTicket(this.ticketActual).subscribe((data) => {
        this.ticketDetalle = data;
      });
    });
  }

}
