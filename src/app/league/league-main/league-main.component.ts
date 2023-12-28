import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-league-main',
  templateUrl: './league-main.component.html',
  styleUrl: './league-main.component.scss'
})
export class LeagueMainComponent implements OnInit {
  leagueId!: number ;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(param =>{
      this.leagueId = param['id'];
    });
 }
  ngOnInit(): void {


  }



}


