import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrentSeasonService } from './current-season.service';
import { LeagueStandingsResponse } from '../model/league/league-standings-response.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueControllerService {
  constructor(private httpClient: HttpClient, private currentSeasonService: CurrentSeasonService) {
  }
  private cache = new Map<number, Observable<LeagueStandingsResponse>>();
  private leagueStandingUrl = environment.apiUrl + '/standings?season=' + this.currentSeasonService.getCurrentSeason();

  getLeagueStandings(leagueId: number): Observable<LeagueStandingsResponse> | undefined {
    if (!this.cache.has(leagueId)) {
      this.cache.set(leagueId, this.httpClient.get<LeagueStandingsResponse>(this.leagueStandingUrl + "&league=" + leagueId,
        { headers: { "x-rapidapi-key": environment.apiKey } }).pipe(shareReplay(1)));
    }
    return this.cache.get(leagueId);
  }
}
