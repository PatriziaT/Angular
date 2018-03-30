import { Component, OnInit } from '@angular/core';

import { Leader } from './../shared/leader';
import { LeaderService } from '../services/leader.service';

import { Params } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderservice: LeaderService
  ){}

  // week 3
  //   this.LeaderService.getDishes()
  //     .subscribe(leaders => this.leaders = leaders);
  
  // };
ngOnInit() {
    this.leaderservice.getLeaders()
    .subscribe(leaders => this.leaders = leaders);
  };
  }

