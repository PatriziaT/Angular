import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/LEADERS';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }
  getLeader(id: number): Leader {
    return LEADERS.filter((Leader) => (Leader.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((Leader) => Leader.featured)[0];
  }
}
