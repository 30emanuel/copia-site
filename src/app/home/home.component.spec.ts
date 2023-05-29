import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedBeer to the first beer in the list during ngOnInit', () => {
    expect(component.selectedBeerIndex).toEqual(component.beers[0]);
  });

  it('should update selectedBeer when clickBeer is called', () => {
    const newBeer = 1
    component.clickBeer(newBeer);
    expect(component.selectedBeerIndex).toEqual(newBeer);
  });
});
