import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrentSeasonService } from './current-season.service';
import { LeagueStanding } from '../model/league/league-standing.model';
import { TeamApiResponse } from '../model/team/team-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class TeamControllerService {
  constructor(private httpClient: HttpClient, private currentSeasonService: CurrentSeasonService) {
  }
  private cache = new Map<number, Observable<TeamApiResponse>>();
  private leagueStandingUrl = environment.apiUrl + '/fixtures?last=10&season=' + this.currentSeasonService.getCurrentSeason();

  getTeamResults(teamId: number): Observable<TeamApiResponse> | undefined {

    if (!this.cache.has(teamId)) {
      this.cache.set(teamId, this.httpClient.get<TeamApiResponse>(this.leagueStandingUrl + "&team=" + teamId,
        { headers: { "x-apisports-key": environment.apiKey } }).pipe(shareReplay(1)));
    }
    return this.cache.get(teamId);
  }

}
