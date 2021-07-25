import { Component, OnInit } from '@angular/core';
import {PlanningService} from "../../service/planning.service";
import {ActivatedRoute, Router} from "@angular/router";
import { PlanningMatch } from '../../models/planning-match';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id:number;
  evv =  new PlanningMatch();
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private planningService: PlanningService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(data =>{
    this.id = data.id;
    this.planningService.getPlannedMatchById(this.id).subscribe(eventData => {
      this.evv = eventData;
      console.log("eventData");
      });
    });
  }

  updateEvent(form){
    const updateEvent = {
      id: form.value.id,
      equipe1: form.value.equipe1,
      equipe2: form.value.equipe2,
      stade: form.value.stade,
      type: form.value.type,
      date: form.value.date,
      heure: form.value.heure
    };
 
this.planningService.updatePlanningMatch(this.id, form.value).subscribe(
  ()=>alert("good"))
  this.router.navigate(['list-match']);

  }

}
