import { ApiParameters } from "../api-parameters.model";
import { Paging } from "../paging.model";
import { TeamResponse } from "./team-response";

export interface TeamApiResponse {
  get: string;
  parameters: ApiParameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: TeamResponse[];
}
