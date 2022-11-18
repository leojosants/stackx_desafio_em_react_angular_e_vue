
<!--  -->
<template>

  <HeaderComponent />

  <!-- container -->
  <div class="text-white w-screen h-screen flex flex-col justify-center items-center">

    <!-- content -->
    <div class="w-full max-w-3xl h-screen min-w-full[18.5rem] py-28 py-4 m-auto flex justify-between flex-col items-center">

      <h1 class="font-normal text-2xl text-center mb-8">{{ title }}</h1>
      
      <!-- "content-techs" -->
      <div class="bg-shark w-4/5 h-44 border-2 border-solid border-brown rounded-lg py-6 px-20 flex flex-col flex-wrap">

        <TechnologiesComponent 
          @changeTitle="onChangeTitle" v-for="(item, index) in technologies" :key="index"
          :technologies="item" :title="title" 
        />
      </div>

      <!-- botao_footer -->
      <div class="flex items-center justify-center w-full">
        <FooterComponent
          @changeTitle2="onChangeTitle2"
          v-for="(item, index) in flags" :key="index"
          :flags="item"
        />
      </div>

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
          msg: `Tecnologia selecionada: JavaScript`,
          name: 'JavaScript',
        },
        {
          msg: `Tecnologia selecionada: React`,
          name: 'React',
        },
        {
          msg: `Tecnologia selecionada: Vue Js`,
          name: 'Vue Js',
        },
        {
          msg: `Tecnologia selecionada: Tailwind CSS`,
          name: 'Tailwind CSS',
        },
        {
          msg: `Tecnologia selecionada: Styled Components`,
          name: 'Styled Components',
        },
        {
          msg: `Tecnologia selecionada: Saas`,
          name: 'Saas',
        },
        {
          msg: `Tecnologia selecionada: Node`,
          name: 'Node',
        },
        {
          msg: `Tecnologia selecionada: TypeScript`,
          name: 'TypeScript',
        },
        {
          msg: `Tecnologia selecionada: Angular`,
          name: 'Angular',
        },
        {
          msg: `Tecnologia selecionada: Java`,
          name: 'Java',
        }
      ],

      flags: [
        {
          name: 'Português',
          src: 'src/assets/images/brazil.svg',
          translate: 'Olá, meu nome é Leonardo Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência: ',
        },
        {
          name: 'Inglês',
          src: 'src/assets/images/united-states.png',
          translate: 'Hello, my name is Leonardo Santos and I am a Front-End Developer, Technologies that I have experience: ',
        },
        {
          name: 'Espanhol',
          src: 'src/assets/images/spain.png',
          translate: 'Hola, mi nombre es Leonardo Santos y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:'
        }
      ],
    }
  },

  methods: {
    onChangeTitle(name) {
      if (name == this.technologies[0].name) {
        this.title = this.technologies[0].msg
      }
      else if (name == this.technologies[1].name) {
        this.title = this.technologies[1].msg
      }
      else if (name == this.technologies[2].name) {
        this.title = this.technologies[2].msg
      }
      else if (name == this.technologies[3].name) {
        this.title = this.technologies[3].msg
      }
      else if (name == this.technologies[4].name) {
        this.title = this.technologies[4].msg
      }
      else if (name == this.technologies[5].name) {
        this.title = this.technologies[5].msg
      }
      else if (name == this.technologies[6].name) {
        this.title = this.technologies[6].msg
      }
      else if (name == this.technologies[7].name) {
        this.title = this.technologies[7].msg
      }
      else if (name == this.technologies[8].name) {
        this.title = this.technologies[8].msg
      }
      else if (name == this.technologies[9].name) {
        this.title = this.technologies[9].msg
      }

    },

    onChangeTitle2(name) {
      if (name == this.flags[0].name) {
        this.title = this.flags[0].translate
      }
      else if (name == this.flags[1].name) {
        this.title = this.flags[1].translate
      }
      else if (name == this.flags[2].name) {
        this.title = this.flags[2].translate
      }
    }
  }

}
</script>

<!--  -->
<style>

</style>
