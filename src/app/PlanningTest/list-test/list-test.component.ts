import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlanningService} from "../../service/planning.service";
import { PlanningTest } from '../../models/planning-test';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  id:number;
  fileName= 'Planning Test.xlsx';
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

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

}
