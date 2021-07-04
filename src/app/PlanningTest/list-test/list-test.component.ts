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
  id:number;
  
  myArray: any = [];

  constructor(private router: Router, private planningService: PlanningService) {}

  ngOnInit(){
    this.planningService.getPlannedTest()
      .subscribe( data => {
        this.myArray = data['hydra:member'];
        console.log(data['hydra:member']);
  });
  }

  addPlanning() {
    this.router.navigate(['create-test']);
  }
 
  deletePlanning(id) {
      this.planningService.deletePlannedTest(id).subscribe(()=>{
        this.myArray =this.myArray.filter(test => test.id !=id) 
      });
        this.router.navigate(['list-test']);
  
    }

  listMatch(){
    this.router.navigate(['list-match']);
  }

}
