import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../match.service';

import { match } from '../model/match';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  Match:match[]=[];
  listFilter: string;
  display1 = false;
  equipe :any;
  query:string;
  liste:any;
  searchform = new FormGroup({
    recherche: new FormControl('')
  });
  constructor(private matchService:MatchService, private route: ActivatedRoute, private router: Router) { 
    this.listFilter; { }
  }
  ngOnInit(): void {
  //   this.equipe=this.route.snapshot.paramMap.get('equipe');
  //   console.log("equipe:",this.equipe);
  // this.matchService.searchBy(this.equipe).subscribe((data)=> {
  //   this.matchService=data['hydra:member'];
  //   console.log(this.matchService);
// })
    this.matchService.getmatch().subscribe(
      data=>{
       this.Match=data['hydra:member']
       console.log(this.Match)
        
      }
    );
  }
  update(id: number){
    this.router.navigate(['/updatematch', id]);

  }
  delete(id: number) {

    this.matchService.deletematch(id)
      .subscribe(
        data => {
          this.Match=data['hydra:member']
          console.log(this.Match);
        

        },
        error => console.log(error));
        location.reload();
  }
  showDialogB() {
    this.display1 = true;

  }
  recherche(){
    console.log(this.searchform.value);
    
    this.router.navigate(['/searchbyres/'+this.searchform.value.recherche]);
console.log ("recherche")
    
  }
}
