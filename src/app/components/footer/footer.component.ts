import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  faphone = faPhone
  faenvelope = faEnvelope
  famappin = faMapPin
  fainstagram = faInstagram
}
