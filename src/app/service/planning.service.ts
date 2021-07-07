import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanningTest } from '../models/planning-test';
import { PlanningMatch } from '../models/planning-match';
import { PlanningEntrainement } from '../models/planning-entrainement';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  //                              Planning test service

  httpClient: any;
 
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
  
  deletePlannedTest(id) {
    return this.http.delete(this.baseUrl + '/planning_tests/' + id, {responseType: 'json'});
  }

  //                          Planning match service

  getPlannedMatch() {
    return this.http.get<PlanningMatch[]>(this.baseUrl+'/planning_matches');
  }

  getPlannedMatchById(id: any) {
    return this.http.get<PlanningMatch>(this.baseUrl + '/planning_matches/' + id);
  }

  createPlanningMatch(planningMatch: PlanningMatch) {
    return this.http.post(this.baseUrl+'/planning_matches', planningMatch, {responseType: 'json'});
  }

  updatePlanningMatch(id, planningMatch:PlanningMatch){
    return this.http.put<PlanningMatch>(this.baseUrl + '/planning_matches/'+ id,planningMatch );
  }
  
  deletePlannedMatch(id) {
    return this.http.delete(this.baseUrl + '/planning_matches/' + id, {responseType: 'json'});
  }

                                     //Planning entrainement service       
                                     
  getPlannedEntrainement() {
    return this.http.get<PlanningEntrainement[]>(this.baseUrl+'/planning_entrainements');
  }

  getPlannedEntrainementById(id: any) {
    return this.http.get<PlanningEntrainement>(this.baseUrl + '/planning_entrainements/' + id);
  }

  createPlanningEntrainement(planningEntrainement: PlanningEntrainement) {
    return this.http.post(this.baseUrl+'/planning_entrainements', planningEntrainement, {responseType: 'json'});
  }

  updatePlanningEntrainement(id, planningEntrainement:PlanningEntrainement){
    return this.http.put<PlanningEntrainement>(this.baseUrl + '/planning_entrainements/'+ id,planningEntrainement);
  }
  
  deletePlannedEntrainement(id) {
    return this.http.delete(this.baseUrl + '/planning_entrainements/' + id, {responseType: 'json'});
  }

}
