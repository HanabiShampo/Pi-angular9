import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlanningService} from "../../service/planning.service";
import { PlanningMatch } from '../../models/planning-match';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.css']
})
export class ListMatchComponent implements OnInit {
  myArray: any = [];
  fileName= 'Planning Match.xlsx';
  constructor(private router: Router, private planningService: PlanningService) { }

  ngOnInit(): void {
    this.planningService.getPlannedMatch()
      .subscribe( data => {
        this.myArray = data['hydra:member'];
        console.log(data['hydra:member']);
  });
  }

  addPlanning() {
    this.router.navigate(['create-match']);
  }

  deletePlanning(id) {
    this.planningService.deletePlannedMatch(id).subscribe(()=>{
      this.myArray =this.myArray.filter(test => test.id !=id) 
    });
      this.router.navigate(['list-match']);
  }

  listTest(){
    this.router.navigate(['list-test']);
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
