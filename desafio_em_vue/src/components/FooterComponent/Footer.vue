<!--  -->
<template>

    <footer>
        <div>

            <button @click="handleClick(name)">

                <img :src="src" :alt="name">
            
                <!-- <p>{{ titleTeste }}</p> -->
            
                <!-- <p>{{ translateTeste }}</p> -->
            
            </button>

        </div>

    </footer>

</template>

<!--  -->
<script>

export default {
    name: 'FooterComponent',

    props: {
        title: String,
        flags: {}
    },

    data() {
        return {
            titleTeste: this.title,
            name: this.flags.name,
            src: this.flags.src,
            // translateTeste: this.flags
        }
    },

    methods: {
        handleClick(name) {
                // this.titleTeste = this.technologies.name
                this.$emit('changeTitle', name)
            }
    }
}

</script>