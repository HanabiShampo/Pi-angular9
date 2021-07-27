import { Component, OnInit } from '@angular/core';
import {ListUserService} from '../list-user.service';

@Component({
  selector: 'app-delete-u',
  templateUrl: './delete-u.component.html',
  styleUrls: ['./delete-u.component.css']
})
export class DeleteUComponent implements OnInit {
  id;
  constructor(private service: ListUserService) { }

  ngOnInit(): void {

  }

  deleteuser() {
    this.service.deleteuser(this.id).subscribe();
  }}
