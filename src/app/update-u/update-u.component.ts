import { Component, OnInit } from '@angular/core';
import {ListUserService} from '../list-user.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-update-u',
  templateUrl: './update-u.component.html',
  styleUrls: ['./update-u.component.css']
})
export class UpdateUComponent implements OnInit {
  id;
  forme;
  o;
  constructor(private serviceOmploi: ListUserService,
              private  act: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
    this.serviceOmploi.getUsrById(this.id).subscribe((liste) => {
      this.o = liste;
      console.log(this.o);
  });
  }

    updateUsr(f){
      this.serviceOmploi.updateuser(this.id, f).subscribe(() => {
        alert('usr modifier avec success...');
        this.router.navigate(['/list']);
      });
    }

}
