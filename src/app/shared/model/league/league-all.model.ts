import { LeagueGoals } from "./league-goals.model";

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: LeagueGoals;
}
