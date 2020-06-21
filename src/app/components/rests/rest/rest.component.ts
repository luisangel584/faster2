import { Component, OnInit } from '@angular/core';
import { RestsService } from 'src/app/services/rests/rests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  restActual: any;
  menuActual: any = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public restsServices: RestsService
  ) { }

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.activatedRoute.params.subscribe((param: any) => {
      this.restActual = param.rest;
      this.restsServices.getMenu(this.restActual).subscribe((menu) => {
        this.menuActual = menu;
        console.log(this.menuActual);
      });
    });
  }

}
