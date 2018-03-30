import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable } from 'rxjs/Observable';

//Remove in Step2 of week 3
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
@Injectable()
export class DishService {

  constructor() { }

  // week 3
//   STEP1 convertion from week 2 code to week 3
//   getDishes(): Promise<Dish[]> {
//     return Observable.of(DISHES).delay(2000).toPromise();
//   }

//   getDish(id: number): Promise<Dish> {
//     return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000).toPromise();
//   }

//   getFeaturedDish(): Promise<Dish> {
//     return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000).toPromise();
//   }
// }

// STEP2 rather directly operate with observables, updated code
getDishes(): Observable<Dish[]> {
  return Observable.of(DISHES).delay(2000);
}

getDish(id: number): Observable<Dish> {
  return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
}

getFeaturedDish(): Observable<Dish> {
  return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
}

getDishIds(): Observable<number[]> {
  return Observable.of(DISHES.map(dish => dish.id ));
}


  // week 2 
  // getDishes(): Promise<Dish[]> {
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES), 2000);
  //   });
  // }

  // getDish(id: number): Promise<Dish> {
  //   return new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
  //   });
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return  new Promise(resolve=> {
  //     // Simulate server latency with 2 second delay
  //       setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
  //   });
  // }
}
