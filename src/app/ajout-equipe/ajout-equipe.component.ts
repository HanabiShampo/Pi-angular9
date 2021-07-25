import { Component, OnInit } from '@angular/core';
import { AjoutEquipeService } from '../ajout-equipe.service';
import { equipe } from '../model/equipe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.css']
})
export class AjoutEquipeComponent implements OnInit {
equipe: equipe;
registerForm : FormGroup;
  submitted = false;
  itsTrue: boolean;
  constructor(private service:AjoutEquipeService, private formBuilder: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.equipe = new equipe();
    this.registerForm = this.formBuilder.group({
     
        nom: ['', Validators.required],
        niveau: ['', Validators.required],
        entraineur: ['', Validators.required],
        joueurs: ['', Validators.required],
        medecin: ['', Validators.required],
        log : ['', Validators.required],
       
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
    this.service.addequipe(this.equipe).subscribe(data => console.log(data),
     error => console.log(error));
  this.equipe = new equipe();
  


alert('equipe ajoute avec succe');
  this.submitted = false;
  this.registerForm.reset();


  }
   onReset(){
    this.router.navigate(['/getEquipe']);
  }
}