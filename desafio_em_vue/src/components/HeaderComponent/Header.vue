<!--  -->
<template>
    
    <header class="w-screen h-16 fixed bg-shark flex justify-center items-center">

        <div class="w-48 h-10 pt-2 px-5 rounded-lg bg-rgba ">
            <a v-bind:href="site_stack" target="_blank">
                <img src="../../assets/images/logoStackx.svg" alt="Logo StackX">
            </a>
        </div>

    </header>

</template>

<!--  -->
<script>
    export default {
        name: 'HeaderComponent',
         
        data() {
            return {
                site_stack: 'https://academia.stackx.com.br/'
            }
        }
    }
</script>