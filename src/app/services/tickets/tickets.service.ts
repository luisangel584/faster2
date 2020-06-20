import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(
    public af: AngularFirestore
  ) { }

  getTicket(numeroTicket: string) {
    return this.af.doc(`tickets/${numeroTicket}`).valueChanges();
  }
}
