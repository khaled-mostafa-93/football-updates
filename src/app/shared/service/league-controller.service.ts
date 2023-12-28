import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeagueStandingsResponse } from '../model/league/league-standings-response.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrentSeasonService } from './current-season.service';

@Injectable({
  providedIn: 'root'
})
export class LeagueControllerService {
  constructor(private httpClient: HttpClient, private currentSeasonService: CurrentSeasonService){
  }
  private leagueStandingUrl = environment.apiUrl +  '/standings?season=' +this.currentSeasonService.getCurrentSeason();

 getLeagueStandings(leagueId : number): Observable<LeagueStandingsResponse> {

  return this.httpClient.get<LeagueStandingsResponse>(this.leagueStandingUrl + "&league=" + leagueId,
   {headers: {"x-rapidapi-key": environment.apiKey}});
 }
}
