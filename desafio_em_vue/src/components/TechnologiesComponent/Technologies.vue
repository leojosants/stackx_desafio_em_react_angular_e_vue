<!--  -->
<template>

    <section>

        <ul  class="inline-block flex-col flex-wrap h-full mr-2">

            <button class="bg-shark mt-0 mr-4 " @click="handleClick(name)">

                <li> {{ name }} </li>
            
            </button>
        
        </ul>

    </section>

</template>

<!--  -->
<script>
    export default {
        name: 'TechnologiesComponent',

        props: {
            title: String,
            technologies: {}
        },

        data() {
            return {
                name: this.technologies.name
            }
        },

        methods: {
            handleClick(name) {
                this.$emit('changeTitle', name)
            }
        }
    }
</script>
