import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from './../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() {

    // this.dish = this.dishservice.getFeaturedDish()
    this.dishservice.getFeaturedDish()
      .subscribe(dishes => this.dish = dishes);;

    // this.promotion = this.promotionservice.getFeaturedPromotion();
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotions => this.promotion = promotions);;

    // this.leader = this.leaderservice.getFeaturedLeader();
    this.leaderservice.getFeaturedLeader()
      .subscribe(leaders => this.leader = leaders);;
  };

}