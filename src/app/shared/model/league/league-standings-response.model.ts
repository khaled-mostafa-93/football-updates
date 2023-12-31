import { LeagueResponse } from "./league-response.model";
import { Paging } from "../paging.model";
import { ApiParameters } from "../api-parameters.model";

export interface LeagueStandingsResponse {
  get: string;
  parameters: ApiParameters;
  results: number;
  paging: Paging;
  response: LeagueResponse[];
}
