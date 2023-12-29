import { LeagueStanding } from "./league/league-standing.model";

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: LeagueStanding[][];
}
