import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  flags = [
    {
      name: 'Brasil',
      src: '../../../assets/images/brazil.png'
    },
    {
      name: 'Inglês',
      src: '../../../assets/images/united-states.png'
    },
    {
      name: 'Espanha',
      src: '../../../assets/images/spain.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
