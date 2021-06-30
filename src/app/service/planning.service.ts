import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanningTest } from '../models/planning-test';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlanningService {
 
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://127.0.0.1:8000/api';

  getPlannedTest() {
    return this.http.get<PlanningTest[]>(this.baseUrl+'/planning_tests');
  }

  getPlannedTestById(id: any) {
    return this.http.get<PlanningTest>(this.baseUrl + '/planning_tests/' + id);
  }

  createPlanningTest(planningTest: PlanningTest) {
    return this.http.post(this.baseUrl+'/planning_tests', planningTest, {responseType: 'json'});
  }

  updatePlanningTest(id, planningTest:PlanningTest){
    return this.http.put<PlanningTest>(this.baseUrl + '/planning_tests/'+ id,planningTest );
  }
  
  deletePlannedTest(id: any) {
    return this.http.delete(this.baseUrl + '/planning_tests/' + id , {responseType: 'text'} );
  }

  deleteAllPlannedTest(): Observable<any>  {
    return this.http.delete(this.baseUrl + '/planning_tests', {responseType: 'json'}  );
  }

}
