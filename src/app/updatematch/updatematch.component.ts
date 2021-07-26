import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../match.service';
import { match } from '../model/match';

@Component({
  selector: 'app-updatematch',
  templateUrl: './updatematch.component.html',
  styleUrls: ['./updatematch.component.css']
})
export class UpdatematchComponent implements OnInit {
  id: number;
  match: match;
  constructor(private service:MatchService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
 
  this.match = new match();
  this.id = this.route.snapshot.params['id'];
  console.log(this.id);
  this.service.getmatchbyid(this.id)
    .subscribe(data => {
       this.match=data;
                 console.log(data);

    }, error => console.log(error));
}
onSubmit() {
  this.service.updatematch(this.id, this.match)
    .subscribe(data => console.log(data), error => console.log(error));
    this.match = new match();
  
}
}
