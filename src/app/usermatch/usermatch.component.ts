import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../match.service';
import { match } from '../model/match';

@Component({
  selector: 'app-usermatch',
  templateUrl: './usermatch.component.html',
  styleUrls: ['./usermatch.component.css']
})
export class UsermatchComponent implements OnInit {
  Match:match[]=[];
  constructor(private matchService:MatchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.matchService.getmatch().subscribe(
      data=>{
       this.Match=data['hydra:member']
       console.log(this.Match)
        
      }
    );
  }

}
