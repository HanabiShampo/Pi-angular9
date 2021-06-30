import { Component, OnInit } from '@angular/core';
import {PlanningService} from "../../service/planning.service";
import {ActivatedRoute, Router} from "@angular/router";
import { PlanningTest } from '../../models/planning-test';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {
  id:number;
  evv =  new PlanningTest();
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private planningService: PlanningService, private route: ActivatedRoute) { }

  ngOnInit(){
   /* let id = localStorage.getItem("id");
    if(!id) {
      alert("Invalid action")
      this.router.navigate(['list-test']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      Titre: ['', Validators.required],
      Type: ['', Validators.required],
      Lieu: ['', Validators.required],
      Date: ['', Validators.required],
      Heure: ['', Validators.required]
    });
     */
  this.route.params.subscribe(data =>{
    this.id = data.id;
  
    this.planningService.getPlannedTestById(this.id).subscribe(eventData => {
      this.evv = eventData;
    });
  });
  }

  updateEvent(form){
    const updateEvent = {
      id: form.value.id,
      titre: form.value.titre,
      type: form.value.type,
      lieu: form.value.lieu,
      date: form.value.date,
      heure: form.value.heure
    };
 
this.planningService.updatePlanningTest(this.id, form.value).subscribe(
  ()=>alert("good"))
  this.router.navigate(['list-test']);

  }

} 
