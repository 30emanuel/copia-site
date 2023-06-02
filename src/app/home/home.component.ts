import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faarrowleft = faArrowLeft
  faarrowrigth = faArrowRight

  beers: any = [
    {name: 'Pilsen', description: 'Leve e refrescante, a Pilsen é uma cerveja dourada de sabor suave e equilibrado, com notas maltadas e um amargor sutil. É a escolha perfeita para momentos descontraídos.', abv: '16', ibu: '4,5%'},
    {name: 'Ipa', description: 'Intensamente aromática e amarga, a IPA é uma cerveja de coloração âmbar com sabores cítricos e frutados provenientes dos lúpulos. É ideal para os apreciadores de um perfil mais ousado.', abv: '32', ibu: '4,5%'},
    {name: 'Stout', description: 'Escura e encorpada, a Stout é uma cerveja de sabor complexo com notas de café, chocolate e torrefação. Possui uma textura cremosa e um final levemente amargo, proporcionando uma experiência intensa.', abv: '37', ibu: '5,5%'},
    {name: 'Red', description: 'De coloração avermelhada e aroma caramelado, a Red Ale é uma cerveja de sabor maltado e levemente adocicado. Com equilíbrio entre dulçor e amargor, é uma opção versátil e saborosa para os apreciadores de cervejas mais robustas.', abv: '52', ibu: '6,2%'},
  ]

  selectedBeerIndex: number = 0
  showRightArrow: boolean = true
  showLeftArrow: boolean = false

  data: any = {}

  ngOnInit(): void {
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
    this.updateArrowVisibility()
  }

  beforeBeer(){
    this.selectedBeerIndex --
    this.updateArrowVisibility()
  }

}
