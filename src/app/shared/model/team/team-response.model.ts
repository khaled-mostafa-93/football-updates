import { League } from "../league.model";
import { Goals } from "./team-goals.model";
import { Teams } from "./teams.model";

export interface TeamResponse {
  league: League;
  teams: Teams;
  goals: Goals;

}
