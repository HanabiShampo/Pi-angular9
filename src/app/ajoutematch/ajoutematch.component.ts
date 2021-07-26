import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { match } from '../model/match';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajoutematch',
  templateUrl: './ajoutematch.component.html',
  styleUrls: ['./ajoutematch.component.css']
})
export class AjoutematchComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;
  itsTrue: boolean;
  Match: match;
 
  constructor(private service:MatchService ,private formBuilder: FormBuilder,private router: Router,) { }

  ngOnInit(): void {
    this.Match = new match();
  
    this.registerForm = this.formBuilder.group({
     
        equipe: ['', Validators.required],
        stade: ['', Validators.required],
        type: ['', Validators.required],
        date: ['', Validators.required],
        adversaire : ['', Validators.required],
        res : ['', Validators.required],
      
      });
  }
  get f() { return this.registerForm.controls; }


onSubmit() {
  this.submitted = true;
  this.itsTrue = false;
  // stop here if form is invalid
  if (this.registerForm.invalid ) {
    return;
  }

    this.service.addmatch(this.Match).subscribe(data => console.log(data),
     error => console.log(error));
  this.Match = new match();
  location.reload();
  alert('match ajoute avec succe');
  this.submitted = false;
  this.registerForm.reset();


  }
  onReset(){
    this.router.navigate(['/getmatch']);
  }
}
