import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamApiResponse } from '../model/team/team-api-response.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrentSeasonService } from './current-season.service';

@Injectable({
  providedIn: 'root'
})
export class TeamControllerService {
  constructor(private httpClient: HttpClient, private currentSeasonService: CurrentSeasonService){
  }
  private leagueStandingUrl = environment.apiUrl +  '/fixtures?last=10&season=' +this.currentSeasonService.getCurrentSeason();

  getTeamResults(teamId : number): Observable<TeamApiResponse> {

  return this.httpClient.get<TeamApiResponse>(this.leagueStandingUrl + "&team=" + teamId,
   {headers: {"x-rapidapi-key": environment.apiKey}});
 }

}
