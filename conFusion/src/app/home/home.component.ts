import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from './../shared/leader';
import { LeaderService } from '../services/leader.service';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(), expand ()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {

    // this.dish = this.dishservice.getFeaturedDish()
    this.dishservice.getFeaturedDish()
      .subscribe(dishes => this.dish = dishes, 
        dishErrMess => this.dishErrMess = <any>dishErrMess);;

    // this.promotion = this.promotionservice.getFeaturedPromotion();
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotions => this.promotion = promotions);;

    // this.leader = this.leaderservice.getFeaturedLeader();
    this.leaderservice.getFeaturedLeader()
      .subscribe(leaders => this.leader = leaders);;
  };

}