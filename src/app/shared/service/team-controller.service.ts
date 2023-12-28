import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamApiResponse } from '../model/team/team-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class TeamControllerService {

  private arsenalFixturesUrl: string = '/assets/data/arsenal.json';
  private madridFixturesUrl: string = '/assets/data/madrid.json';
  private bayernFixturesUrl: string = '/assets/data/bayern.json';
  private parisFixturesUrl: string = '/assets/data/paris.json';
  private milanFixturesUrl: string = '/assets/data/milan.json';
  constructor(private httpClient: HttpClient ){
  }
  getTeamResults(teamId: string) {
    let url : string;
  switch (teamId) {
    case "42":
      url = this.arsenalFixturesUrl
      break;
      case "541":
        url = this.madridFixturesUrl
        break;
        case "157":
      url = this.bayernFixturesUrl
      break;
      case "85":
      url = this.parisFixturesUrl
      break;
      case "489":
      url = this.milanFixturesUrl
      break;
    default:
      throw new Error("unknown league");

      break;
  }
  return this.httpClient.get<TeamApiResponse>(url);
  }
}
