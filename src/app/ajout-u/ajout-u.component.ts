import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../list-user.service';

@Component({
  selector: 'app-ajout-u',
  templateUrl: './ajout-u.component.html',
  styleUrls: ['./ajout-u.component.css']
})
export class AjoutUComponent implements OnInit {

  constructor(private service: ListUserService ) { }

  ngOnInit(): void {
  }

  submit(f){
    this.service.adduser(f).subscribe(()=>alert("good"));

  }

}
