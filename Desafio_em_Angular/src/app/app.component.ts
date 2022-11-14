import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  language = [
    {
      portugues: `Olá, meu nome é Leonardo Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência: `,

      ingles: `Hello, my name is Leonardo Santos and I am a Front-End Developer, Technologies that I have experience: `,

      espanhol: `Hola, mi nombre es Leonardo Santos y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia`
    }
  ];

  flags = [
    {
      name: 'Brazil',
      flag: '../assets/images/brazil.png',
      metodo: () => (this.selected = this.language[0].portugues)
    },
    {
      name: 'United-states',
      flag: '../assets/images/united-states.png',
      metodo: () => (this.selected = this.language[0].ingles)
    },
    {
      name: 'Spain',
      flag: '../assets/images/spain.png',
      metodo: () => (this.selected = this.language[0].espanhol)
    }
  ]

  selected = this.language[0].portugues;

  onChangeLanguage($event: string) {
    if($event === 'Brazil') {
      this.flags[0].metodo();
    }
    else if($event === 'Spain') {
      this.flags[1].metodo();
    }
    else {
      this.flags[2].metodo();
    }

  }

}
