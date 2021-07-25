import { Component, OnInit } from '@angular/core';
import {PlanningService} from "../../service/planning.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-entrainement',
  templateUrl: './create-entrainement.component.html',
  styleUrls: ['./create-entrainement.component.css']
})
export class CreateEntrainementComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private planningService: PlanningService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      equipe: ['', Validators.required],
      nbrJoueurs: ['', Validators.required],
      stade: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      commentaire: ['', Validators.required]
    })

  }

  onSubmit() {
    this.planningService.createPlanningEntrainement(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-entrainement']);
      });
  }

}
