import { Component, OnInit } from '@angular/core';
import {user} from '../model/user';
import { ListUserService } from '../list-user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  User:user[]=[];
  id;
  constructor(private userservice:ListUserService) { }

  ngOnInit(): void {
    this.userservice.getuser().subscribe(
      data=>{
        this.User=data['hydra:member']
        console.log(this.User)

      }
    );


  }
  deleteuser(id) {
    this.userservice.deleteuser(id).subscribe();
  }
}
