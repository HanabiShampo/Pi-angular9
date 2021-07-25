import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../match.service';
import { match } from '../model/match';

@Component({
  selector: 'app-stat-match',
  templateUrl: './stat-match.component.html',
  styleUrls: ['./stat-match.component.css']
})
export class StatMatchComponent implements OnInit {
  Match:match[];
  nbrganger: number;
  nbrnonganger:number;
  data:any;
  x:number;
  constructor(private matchService:MatchService, private route: ActivatedRoute, private router: Router) { 
   
  }
  ngOnInit(): void {
    this.matchService.searchByres().subscribe(
     (data)=>{
       this.Match=data['hydra:member']
       this.nbrganger=this.Match.length
       console.log("liste match",this.nbrganger)
       this.matchService.searchByb().subscribe(
        (data)=>{
          console.log("liste match ",this.data)
         this.Match=data['hydra:member']
         this.nbrnonganger=this.Match.length
         console.log("liste match non ganger ",this.nbrnonganger)
           
    this.data = {
      labels: ['nbrganger','nbrnonganger'],
      datasets: [
          {
              data: [this.nbrganger,this.nbrnonganger],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                 
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                 
              ]
          }]    
      };
        }
      );
      }
    );
 
   
  }
  

}
