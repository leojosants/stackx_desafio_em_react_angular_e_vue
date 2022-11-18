
<!--  -->
<template>

  <HeaderComponent />

  <!-- container -->
  <div class="min-h-screen">

    <!-- content -->
    <div>

      <div>
        <h1>{{ title }}</h1>

        <TechnologiesComponent
          @changeTitle="onChangeTitle" 
          v-for="(item, index) in technologies" :key="index"
          :technologies="item" :title="title" 
        />

      </div>

      <FooterComponent
        @changeTitle="onChangeTitle2" 
        v-for="(item, index) in flags" :key="index" 
        :flags="item" :title="title" 
      />
    
    </div>

  </div>

</template>

<!--  -->
<script>
import HeaderComponent from '@/components/HeaderComponent/Header.vue';
import TechnologiesComponent from '@/components/TechnologiesComponent/Technologies.vue';
import FooterComponent from '@/components/FooterComponent/Footer.vue';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    TechnologiesComponent,
    FooterComponent,
  },

  data() {
    return {

      title: 'Olá, meu nome é Leonardo Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência: ',

      technologies: [
        {
          name: 'JavaScript',
          // metodo: () => (this.selected = 'JavaScript'),
        },
        {
          name: 'React',
          // metodo: () => (this.selected = 'React'),
        },
        {
          name: 'Vue Js',
          // metodo: () => (this.selected = 'Vue Js'),
        },
        {
          name: 'Tailwind CSS',
          // metodo: () => (this.selected = 'Tailwind CSS'),
        },
        {
          name: 'Styled Components',
          // metodo: () => (this.selected = 'Styled Components'),
        },
        {
          name: 'Saas',
          // metodo: () => (this.selected = 'Saas'),
        },
        {
          name: 'TypeScript',
          // metodo: () => (this.selected = 'TypeScript'),
        },
        {
          name: 'Angular',
          // metodo: () => (this.selected = 'Angular'),
        },
        {
          name: 'Java',
          // metodo: () => (this.selected = 'Java'),
        }
      ],

      flags: [
        {
          name: 'Português',
          src: 'src/assets/images/brazil.svg',
          translate: 'Olá, meu nome é Leonardo Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência: ',
          // metodo: () => (this.selected = this.language[0].portugues)
        },
        {
          name: 'Inglês',
          src: 'src/assets/images/united-states.png',
          translate: 'Hello, my name is Leonardo Santos and I am a Front-End Developer, Technologies that I have experience: ',
          // metodo: () => (this.selected = this.language[0].ingles)
        },
        {
          name: 'Espanhol',
          src: 'src/assets/images/spain.png',
          translate: 'Hola, mi nombre es Leonardo Santos y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:'
          // metodo: () => (this.selected = this.language[0].espanhol)
        }
      ],
      
      mensagem: 'Tecnologia selecionada: '
    }
  },


    methods: {
      onChangeTitle(name) {
        if(name == this.technologies[0].name) {
          this.title = this.mensagem + this.technologies[0].name
        }
        else if(name == this.technologies[1].name) {
          this.title = this.mensagem + this.technologies[1].name
        }
        else if(name == this.technologies[2].name) {
          this.title = this.mensagem + this.technologies[2].name
        }
        else if(name == this.technologies[3].name) {
          this.title = this.mensagem + this.technologies[3].name
        }
        else if(name == this.technologies[4].name) {
          this.title = this.mensagem + this.technologies[4].name
        }
        else if(name == this.technologies[5].name) {
          this.title = this.mensagem + this.technologies[5].name
        }
        else if(name == this.technologies[6].name) {
          this.title = this.mensagem + this.technologies[6].name
        }
        else if(name == this.technologies[7].name) {
          this.title = this.mensagem + this.technologies[7].name
        } 
        else if(name == this.technologies[8].name) {
          this.title = this.mensagem + this.technologies[8].name
        }
        else if(name == this.technologies[9].name) {
          this.title = this.mensagem + this.technologies[9].name
        }
        // else {
          // this.title = this.technologies[9].name

        // }


      },

      onChangeTitle2(name) {
        if(name == this.flags[0].name) {
          this.title = this.flags[0].translate
        }
        else if(name == this.flags[1].name) {
          this.title = this.flags[1].translate
        }
        else if(name == this.flags[2].name) {
          this.title = this.flags[2].translate
        }
      }
    }

}
</script>

<!--  -->
<style>

</style>
