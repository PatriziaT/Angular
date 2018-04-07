import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

// delete for week4 import { DISHES } from '../shared/dishes';

import { DishService } from '../services/dish.service';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(), expand()
    ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;
  
  

  constructor( 
    private dishService: DishService,
    @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {

//week4 update
this.dishService.getDishes()
.subscribe(dishes => this.dishes = dishes,
  errmess => this.errMess = <any>errmess);

// week 2
  //   this.dishService.getDishes()
  //   .then(dishes => this.dishes = dishes);
  }

}

