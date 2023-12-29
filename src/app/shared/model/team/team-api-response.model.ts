import { ApiParameters } from "../api-parameters.model";
import { Paging } from "../paging.model";
import { TeamResponse } from "./team-response.model";

export interface TeamApiResponse {
  get: string;
  parameters: ApiParameters;
  results: number;
  paging: Paging;
  response: TeamResponse[];
}
