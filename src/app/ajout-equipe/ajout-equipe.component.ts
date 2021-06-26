import { Component, OnInit } from '@angular/core';
import { AjoutEquipeService } from '../ajout-equipe.service';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.css']
})
export class AjoutEquipeComponent implements OnInit {

  constructor(private service:AjoutEquipeService) { }

  ngOnInit(): void {
    





}
submit(f){
  this.service.addequipe(f).subscribe(()=>alert("good"));

}
}