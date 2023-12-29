import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentSeasonService {

  getCurrentSeason(): number {
    const currentDate: Date = new Date();
    return (currentDate.getMonth() < 8) ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
  }
}
