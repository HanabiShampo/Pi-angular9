import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlanningService} from "../../service/planning.service";
import { PlanningTest } from '../../models/planning-test';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  planningTest: PlanningTest[]= []

  constructor(private router: Router, private planningService: PlanningService) {}

  ngOnInit(){
    this.planningService.getPlannedTest()
      .subscribe( data => {
        this.planningTest = data['hydra:member'];
        console.log(data['hydra:member']);
  });
  }

}
