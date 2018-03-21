import { MenuComponent } from './../menu/menu.component';
import { DatePipe } from '@angular/common';


import { Component, OnInit } from '@angular/core';
import { Dish } from './../shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  providers: [DatePipe]
})
export class DishdetailComponent implements OnInit {

  
  dish = Dish;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

}
