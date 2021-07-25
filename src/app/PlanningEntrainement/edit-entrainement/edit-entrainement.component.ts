import { Component, OnInit } from '@angular/core';
import {PlanningService} from "../../service/planning.service";
import {ActivatedRoute, Router} from "@angular/router";
import { PlanningEntrainement } from '../../models/planning-entrainement';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-entrainement',
  templateUrl: './edit-entrainement.component.html',
  styleUrls: ['./edit-entrainement.component.css']
})
export class EditEntrainementComponent implements OnInit {

  id:number;
  evv =  new PlanningEntrainement();
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private planningService: PlanningService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data =>{
      this.id = data.id;
      this.planningService.getPlannedEntrainementById(this.id).subscribe(eventData => {
        this.evv = eventData;
        console.log("eventData");
        });
      });
  }

  updateEvent(form){
    const updateEvent = {
      id: form.value.id,
      equipe: form.value.equipe,
      nbrJoueurs: form.value.nbrJoueurs,
      stade: form.value.stade,
      date: form.value.date,
      heure: form.value.heure,
      commentaire: form.value.commentaire
    };
 
this.planningService.updatePlanningEntrainement(this.id, form.value).subscribe(
  ()=>alert("good"))
  this.router.navigate(['list-entrainement']);

  }

}
