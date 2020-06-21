import { Component, OnInit } from '@angular/core';
import { RestsService } from 'src/app/services/rests/rests.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  restaurantes: any = [];

  constructor(
    public restsService: RestsService
  ) { }

  ngOnInit(): void {
    this.getRests();
  }

  getRests() {
    this.restsService.getRests().subscribe((rests: any) => {
      this.restaurantes = rests;
      console.log(this.restaurantes);
    });
  }

}
