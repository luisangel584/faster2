import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RestsService {

  constructor(
    public af: AngularFirestore
  ) { }

  getRests() {
    return this.af.collection('rests').valueChanges();
  }

  getMenu(rest: string) {
    return this.af.collection(`rests/${rest}/platillos`).valueChanges();
  }
}
