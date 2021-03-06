import { Component, OnInit } from '@angular/core';
import {PlanningService} from "../../service/planning.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,private router: Router, private planningService: PlanningService) {}
  addForm: FormGroup;
   
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      titre: ['', Validators.required],
      type: ['', Validators.required],
      lieu: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required]
    });
  }

  onSubmit() {
    this.planningService.createPlanningTest(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['list-test']);
      });
  }

}
