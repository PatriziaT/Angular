import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

// delete for week4 import { DISHES } from '../shared/dishes';

import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  
  

  constructor( 
    private dishService: DishService,
    @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {

// week 3
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);

// week 2
  //   this.dishService.getDishes()
  //   .then(dishes => this.dishes = dishes);
  }

}

