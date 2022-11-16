import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.sass']
})

export class TechsComponent {

  @Input() techs!: {name: string, metodo: () => void};

  @Output()
  language = new EventEmitter();

  handleClick() {
    this.language.emit(this.techs.name);
  }

}
