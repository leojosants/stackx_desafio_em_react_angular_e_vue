import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.sass']
})
export class TechsComponent implements OnInit {

  techs = [
    'JavaScript', 'React', 'Vue Js', 'Tailwind CSS', 'Styled Components', 'Sass', 'Node', 'TypeScriot', 'Angular', 'Java'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
