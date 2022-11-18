<!--  -->
<template>

    <footer>

        <div>
            <button class="w-32 h-12 rounded-lg bg-shark mt-0 mr-4 flex justify-center items-center" @click="handleClick(name)">
                <img class="mr-1" :src="src" :alt="name">
            </button>
        </div>

    </footer>

</template>

<!--  -->
<script>

export default {

    name: 'FooterComponent',

    props: {
        flags: {}
    },

    data() {
        return {
            name: this.flags.name,
        }
    },

    methods: {
        handleClick(name) {
            this.$emit('changeTitle2', name)
        }
    }
}

</script>