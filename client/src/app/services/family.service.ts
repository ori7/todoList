import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FamilyMemberModel } from '../models/family-member.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private httpClient: HttpClient) { 

  }
  
  getFamily():Observable<FamilyMemberModel[]> {

    return this.httpClient.get<FamilyMemberModel[]>(environment.serverUrl + 'family');

  }
}
