import { Component, OnInit } from '@angular/core';
import {PlanningService} from "../../service/planning.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private planningService: PlanningService) { }
  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      equipe1: ['', Validators.required],
      equipe2: ['', Validators.required],
      stade: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required]
    });
  }

  onSubmit() {
    this.planningService.createPlanningMatch(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-match']);
      });
  }

}
