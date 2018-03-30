import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';

//Remove in Step2 of week 3
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }

// week 3
// STEP1 convertion from week 2 code to week 3
// getPromotions(): Promise<Promotion[]> {
//   return Observable.of(PROMOTIONS).delay(2000).toPromise();
// }

// getPromotion(id: number): Promise<Promotion> {
//   return Observable.of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).delay(2000).toPromise();
// }

// getFeaturedDish(): Promise<Promotion> {
//   return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000).toPromise();
// }
// }

// STEP2 rather directly operate with observables, updated code
getPromotions(): Observable<Promotion[]> {
  return Observable.of(PROMOTIONS).delay(2000);
}

getPromotion(id: number): Observable<Promotion> {
  return Observable.of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).delay(2000);
}

getFeaturedPromotion(): Observable<Promotion> {
  return Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000);
}


//   week 2
//   getPromotions(): Promise<Promotion[]> {
//     return new Promise(resolve=> {
//       // Simulate server latency with 2 second delay
//       setTimeout(() => resolve(PROMOTIONS), 2000);
//     });
//   }

//   getPromotion(id: number): Promise<Promotion> {
//     return new Promise(resolve=> {
//   // Simulate server latency with 2 second delay
//   setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]), 2000);
// });
//   }

//   getFeaturedPromotion(): Promise<Promotion> {
//     return new Promise(resolve=> 
//         // Simulate server latency with 2 second delay
//         setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000));
//     };
}
