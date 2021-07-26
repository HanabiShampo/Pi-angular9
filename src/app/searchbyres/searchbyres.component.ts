import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../match.service';
import { match } from '../model/match';

@Component({
  selector: 'app-searchbyres',
  templateUrl: './searchbyres.component.html',
  styleUrls: ['./searchbyres.component.css']
})
export class SearchbyresComponent implements OnInit {
  Match:match[]=[];
liste;
res:any
  constructor(private route: ActivatedRoute,private matchService:MatchService,private router: Router) { }

  ngOnInit(): void {
    this.res=this.route.snapshot.paramMap.get('res');
    this.matchService.searchByress( this.res).subscribe((dataequipe)=> {
      this.liste=dataequipe['hydra:member'];
      console.log(this.liste);
  })
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


}
