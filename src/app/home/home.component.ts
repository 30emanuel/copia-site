import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beers: any = [
    {name: 'Pilsen', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Ea quisquam, facere corporis maxime quo aliquid quos doloremque, recusandae enim, exercitationem non labore velit perferendis quod deleniti eius qui?', abv: '16', ibu: '4,5%'},
    {name: 'Ipa', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Ea quisquam, facere corporis maxime quo aliquid quos doloremque, recusandae enim, exercitationem non labore velit perferendis quod deleniti eius qui?', abv: '32', ibu: '4,5%'},
    {name: 'Stout', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Ea quisquam, facere corporis maxime quo aliquid quos doloremque, recusandae enim, exercitationem non labore velit perferendis quod deleniti eius qui?', abv: '37', ibu: '5,5%'},
    {name: 'Red', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Ea quisquam, facere corporis maxime quo aliquid quos doloremque, recusandae enim, exercitationem non labore velit perferendis quod deleniti eius qui?', abv: '52', ibu: '6,2%'},
  ]

  selectedBeer: any

  ngOnInit(): void {
    this.selectedBeer = this.beers[0]
  }

  clickBeer(beer: any){
    this.selectedBeer = beer
  }

}
