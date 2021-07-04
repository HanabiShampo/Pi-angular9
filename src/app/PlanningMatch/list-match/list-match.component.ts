import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlanningService} from "../../service/planning.service";
import { PlanningMatch } from '../../models/planning-match';
@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.css']
})
export class ListMatchComponent implements OnInit {
  myArray: any = [];

  constructor(private router: Router, private planningService: PlanningService) { }

  ngOnInit(): void {
    this.planningService.getPlannedMatch()
      .subscribe( data => {
        this.myArray = data['hydra:member'];
        console.log(data['hydra:member']);
  });
  }

}
