import { Component, OnInit } from '@angular/core';
import { AjoutEquipeService } from '../ajout-equipe.service';
import { equipe } from '../model/equipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  Equipe:equipe[]=[];
  listFilter: string;
  display1 = false;
  constructor(private equipeservice:AjoutEquipeService,private route: ActivatedRoute, private router: Router) { 
    this.listFilter;
  }

  ngOnInit(): void {
    this.equipeservice.getequipe().subscribe(
      data=>{
       this.Equipe=data['hydra:member']
       console.log(this.Equipe)
        
      }
    );

    
}
update(id: number){
    this.router.navigate(['/updateEquipe', id]);

  }
  delete(id: number) {

    this.equipeservice.deleteequipe(id)
      .subscribe(
        data => {
          this.Equipe=data['hydra:member']
          console.log(this.Equipe);
        

        },
        error => console.log(error));
        location.reload();
  }

  showDialogB() {
    this.display1 = true;

  }
}
