import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beers: any = [
    {name: 'Pilsen', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mi accumsan, dapibus nisl non, gravida magna. Aliquam efficitur nulla ac turpis sollicitudin, at scelerisque risus venenatis. Vestibulum feugiat nisi in ligula sagittis, eu semper turpis semper. Donec at odio vitae felis fringilla.', abv: '16', ibu: '4,5%'},
    {name: 'Ipa', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mi accumsan, dapibus nisl non, gravida magna. Aliquam efficitur nulla ac turpis sollicitudin, at scelerisque risus venenatis. Vestibulum feugiat nisi in ligula sagittis, eu semper turpis semper. Donec at odio vitae felis fringilla.', abv: '32', ibu: '4,5%'},
    {name: 'Stout', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mi accumsan, dapibus nisl non, gravida magna. Aliquam efficitur nulla ac turpis sollicitudin, at scelerisque risus venenatis. Vestibulum feugiat nisi in ligula sagittis, eu semper turpis semper. Donec at odio vitae felis fringilla.', abv: '37', ibu: '5,5%'},
    {name: 'Red', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mi accumsan, dapibus nisl non, gravida magna. Aliquam efficitur nulla ac turpis sollicitudin, at scelerisque risus venenatis. Vestibulum feugiat nisi in ligula sagittis, eu semper turpis semper. Donec at odio vitae felis fringilla.', abv: '52', ibu: '6,2%'},
  ]

  selectedBeerIndex: number = 0
  showRightArrow: boolean = true
  showLeftArrow: boolean = false

  data: any = {}

  constructor(private service: DataService){}

  ngOnInit(): void {
    /*this.service.getData().subscribe(
      response =>{
        this.data = response
        console.log(this.data)
      }
    )*/
  }

  updateArrowVisibility() {
    this.showLeftArrow = this.selectedBeerIndex > 0;
    this.showRightArrow = this.selectedBeerIndex < this.beers.length - 1;
  }

  clickBeer(i: number){
    this.selectedBeerIndex = i
    this.updateArrowVisibility()
  }

  nextBeer(){
    this.selectedBeerIndex ++
    console.log(this.selectedBeerIndex)
    this.updateArrowVisibility()
  }

  beforeBeer(){
    this.selectedBeerIndex --
    this.updateArrowVisibility()
  }

}
