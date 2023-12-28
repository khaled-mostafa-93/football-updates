import { League } from "../league/league.model";
import { Goals } from "./goals";
import { Teams } from "./teams";

export interface TeamResponse {
  league: League;
  teams: Teams;
  goals: Goals;

}
