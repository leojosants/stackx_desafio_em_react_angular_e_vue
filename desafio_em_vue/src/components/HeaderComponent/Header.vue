<!--  -->
<template>
    
    <header>

        <div>
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