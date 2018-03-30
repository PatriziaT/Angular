import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/LEADERS';

import { Observable } from 'rxjs/Observable';

//Remove in Step2 of week 3
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor() { }

  // week 3
//   STEP1 convertion from week 2 code to week 3
//   getLeaders(): Promise<Leader[]> {
//     return Observable.of(LEADERS).delay(2000).toPromise();
//   }

//   getLeader(id: number): Promise<Leader> {
//     return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000).toPromise();
//   }

//   getFeaturedLeader(): Promise<Leader> {
//     return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000).toPromise();
//   }
// }

// STEP2 rather directly operate with observables, updated code
getLeaders(): Observable<Leader[]> {
  return Observable.of(LEADERS).delay(2000)
};

getLeader(id: number): Observable<Leader> {
  return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000)
};

getFeaturedLeader(): Observable<Leader> {
  return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000)
}
  // week2
//   getLeaders(): Promise<Leader[]> {
//     return new Promise(resolve=> {
//       // Simulate server latency with 2 second delay
//       setTimeout(() => resolve(LEADERS), 2000);
//     });
//   }
//   getLeader(id: number): Promise<Leader> {
//     return new Promise(resolve=> {
//       // Simulate server latency with 2 second delay
//       setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
//     });
//   }

//   getFeaturedLeader(): Promise<Leader> {
//     return new Promise(resolve=> {
//       // Simulate server latency with 2 second delay
//       setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
//     });
// }

}