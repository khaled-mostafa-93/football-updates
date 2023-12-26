import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCountriesComponent } from './league-countries.component';

describe('LeagueCountriesComponent', () => {
  let component: LeagueCountriesComponent;
  let fixture: ComponentFixture<LeagueCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
