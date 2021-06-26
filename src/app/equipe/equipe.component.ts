import { Component, OnInit } from '@angular/core';
import { AjoutEquipeService } from '../ajout-equipe.service';
import { equipe } from '../model/equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  Equipe:equipe[]=[];
  constructor(private equipeservice:AjoutEquipeService) { }

  ngOnInit(): void {
    this.equipeservice.getequipe().subscribe(
      data=>{
       this.Equipe=data['hydra:member']
       console.log(this.Equipe)
        
      }
    );

    
}

}
