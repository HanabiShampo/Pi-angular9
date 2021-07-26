import { Component, OnInit } from '@angular/core';
import { AjoutEquipeService } from '../ajout-equipe.service';
import { equipe } from '../model/equipe';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
 id: number;
  equipe: equipe;
  constructor(private service:AjoutEquipeService,private route: ActivatedRoute, private router: Router) { }

   ngOnInit() {

      this.equipe = new equipe();
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      this.service.getequipebyid(this.id)
        .subscribe(data => {
           this.equipe=data;
                     console.log(data);

        }, error => console.log(error));
    }
    onSubmit() {
      this.service.updateequipe(this.id, this.equipe)
        .subscribe(data => console.log(data), error => console.log(error));
        this.equipe = new equipe();
      
    }

}
