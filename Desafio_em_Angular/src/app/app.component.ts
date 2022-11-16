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
      name: 'Português',
      flag: '../assets/images/brazil.png',
      metodo: () => (this.selected = this.language[0].portugues)
    },
    {
      name: 'Inglês',
      flag: '../assets/images/united-states.png',
      metodo: () => (this.selected = this.language[0].ingles)
    },
    {
      name: 'Espanhol',
      flag: '../assets/images/spain.png',
      metodo: () => (this.selected = this.language[0].espanhol)
    }
  ]

  techs = [
    {
      name: 'JavaScript',
      metodo: () => (this.selected = 'JavaScript'),
    },
    {
      name: 'React',
      metodo: () => (this.selected = 'React'),
    },
    {
      name: 'Vue Js',
      metodo: () => (this.selected = 'Vue Js'),
    },
    {
      name: 'Tailwind CSS',
      metodo: () => (this.selected = 'Tailwind CSS'),
    },
    {
      name: 'Styled Components',
      metodo: () => (this.selected = 'Styled Components'),
    },
    {
      name: 'Saas',
      metodo: () => (this.selected = 'Saas'),
    },
    {
      name: 'TypeScript',
      metodo: () => (this.selected = 'TypeScript'),
    },
    {
      name: 'Angular',
      metodo: () => (this.selected = 'Angular'),
    },
    {
      name: 'Java',
      metodo: () => (this.selected = 'Java'),
    }
  ]

  selected = this.language[0].portugues;

  onChangeLanguage($event: string) {
    if($event === 'Português') {
      this.flags[0].metodo();
    }
    else if($event === 'Inglês') {
      this.flags[1].metodo();
    }
    else {
      this.flags[2].metodo();
    }
  }

  techsSelecionada: string = 'Tecnologia selecionada: '

  onChangeTechs($event: string) {
    if ($event === this.techs[0].name) {
      this.selected = this.techsSelecionada + this.techs[0].name;
    }
    else if ($event === this.techs[1].name) {
      this.selected = this.techsSelecionada + this.techs[1].name;
    }
    else if ($event === this.techs[2].name) {
      this.selected = this.techsSelecionada + this.techs[2].name;
    }
    else if ($event === this.techs[3].name) {
      this.selected = this.techsSelecionada + this.techs[3].name;
    }
    else if ($event === this.techs[4].name) {
      this.selected = this.techsSelecionada + this.techs[4].name;
    }
    else if ($event === this.techs[5].name) {
      this.selected = this.techsSelecionada + this.techs[5].name;
    }
    else if ($event === this.techs[6].name) {
      this.selected = this.techsSelecionada + this.techs[6].name;
    }
    else if ($event === this.techs[7].name) {
      this.selected = this.techsSelecionada + this.techs[7].name;
    }
    else {
      this.selected = this.techsSelecionada + this.techs[8].name
    }
  }

}
