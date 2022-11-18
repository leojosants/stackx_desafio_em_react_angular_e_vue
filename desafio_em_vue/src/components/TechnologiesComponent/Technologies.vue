<!--  -->
<template>

    <section>
        <ul>
            <button @click="handleClick(name)">
                <li>
                    <!-- {{titleTeste}} -->
                    {{name}}
                </li>
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
                titleTeste: this.title,
                name: this.technologies.name
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
