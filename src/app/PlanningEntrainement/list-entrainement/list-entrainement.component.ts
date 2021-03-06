import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlanningService} from "../../service/planning.service";
import { PlanningEntrainement } from '../../models/planning-entrainement';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-entrainement',
  templateUrl: './list-entrainement.component.html',
  styleUrls: ['./list-entrainement.component.css']
})
export class ListEntrainementComponent implements OnInit {
  id:number;
  fileName= 'Planning Entrainement.xlsx';
  myArray: any = [];
  constructor(private router: Router, private planningService: PlanningService) { }

  ngOnInit() {
    this.planningService.getPlannedEntrainement()
      .subscribe( data => {
        this.myArray = data['hydra:member'];
        console.log(data['hydra:member']);
  });
  }

  addPlanning() {
    this.router.navigate(['create-entrainement']);
  }

  listTest(){
    this.router.navigate(['list-test']);
  }

  listMatch(){
    this.router.navigate(['list-match']);
  }

  deletePlanning(id) {
    this.planningService.deletePlannedEntrainement(id).subscribe(()=>{
      this.myArray =this.myArray.filter(test => test.id !=id) 
    });
      this.router.navigate(['list-entrainement']);

  }

  exportexcel(): void
  {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
    XLSX.writeFile(wb, this.fileName);
 
  }

}
