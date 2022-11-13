import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-techs',
  templateUrl: './list-techs.component.html',
  styleUrls: ['./list-techs.component.scss']
})
export class ListTechsComponent {

  techs = ['JavaScript', 'React', 'Vue Js', 'Tailwind CSS', 'Styled Components', 'Saas', 'Node', 'TypeScript', 'Angular', 'Java'];

}
