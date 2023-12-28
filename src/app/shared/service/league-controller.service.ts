import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeagueStandingsResponse } from '../model/league/league-standings-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueControllerService {
  private englandStandingsUrl: string = '/assets/data/england.json';
  private spainStandingsUrl: string = '/assets/data/spain.json';
  private germanyStandingsUrl: string = '/assets/data/germany.json';
  private franceStandingsUrl: string = '/assets/data/france.json';
  private italyStandingsUrl: string = '/assets/data/italy.json';
  constructor(private httpClient: HttpClient ){
  }


 getLeagueStandings(leagueId : number): Observable<LeagueStandingsResponse> {
  let url : string;
  switch (leagueId.toString()) {
    case "39":
      url = this.englandStandingsUrl
      break;
      case "140":
        url = this.spainStandingsUrl
        break;
        case "78":
      url = this.germanyStandingsUrl
      break;
      case "61":
      url = this.franceStandingsUrl
      break;
      case "135":
      url = this.italyStandingsUrl
      break;
    default:
      throw new Error("unknown league");

      break;
  }
  return this.httpClient.get<LeagueStandingsResponse>(url);
 }
}
