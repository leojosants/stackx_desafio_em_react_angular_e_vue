import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  @Input() flags!: {name: string; flag: string;
    metodo: () => void};

  @Output()
  language = new EventEmitter();

  handleClick(): void {
    this.language.emit(this.flags.name);
  }

}
