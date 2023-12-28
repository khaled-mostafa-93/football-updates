import { Goals } from "./goals.model";

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}
